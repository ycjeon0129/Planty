#include <ESP8266WiFi.h>
#include <WiFiClientSecure.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>
#include "DHT.h"
#include <math.h>

const char IRG_Root_X1 [] PROGMEM = R"CERT(
-----BEGIN CERTIFICATE-----
    SSL/TLS certificates
-----END CERTIFICATE-----
)CERT";

// Replace with your network credentials
const char* ssid = "ssid";
const char* password = "password";

// Create a list of certificates with the server certificate
X509List cert(IRG_Root_X1);

#define DHTTYPE DHT22
const int sensor_pin = A0;
uint8_t DHTPin = D1; 
DHT dht(DHTPin, DHTTYPE);    

void setup() {
  Serial.begin(115200);
  pinMode(DHTPin, INPUT);
  dht.begin();

  Serial.println();
  Serial.println();
  Serial.println();

  //Connect to Wi-Fi
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }

  // Set time via NTP, as required for x.509 validation
  configTime(3 * 3600, 0, "pool.ntp.org", "time.nist.gov");

  Serial.print("Waiting for NTP time sync: ");
  time_t now = time(nullptr);
  while (now < 8 * 3600 * 2) {
    delay(500);
    Serial.print(".");
    now = time(nullptr);
  }
  Serial.println("");
  struct tm timeinfo;
  gmtime_r(&now, &timeinfo);
  Serial.print("Current time: ");
  Serial.print(asctime(&timeinfo));
}

void loop() {
  WiFiClientSecure client;

  // wait for WiFi connection
  if ((WiFi.status() == WL_CONNECTED)) {

    client.setTrustAnchors(&cert);

    HTTPClient https;

    Serial.print("[HTTPS] begin...\n");
    if (https.begin(client, "https://i9c202.p.ssafy.io/api/embedded")) {  // HTTPS

      Serial.print("[HTTPS] Post...\n");

      https.addHeader("Content-Type", "application/json");

        float soil = analogRead(sensor_pin) / 10;
        float temp = dht.readTemperature();
        float humidity = dht.readHumidity();

        StaticJsonDocument<300> json;
        json["sid"] = 1;
        json["soil"] = soil;
        json["temp"] = temp;
        json["humidity"] = humidity;
        Serial.printf("soil : %f\n", soil);
        Serial.printf("temp : %f\n", temp);
        Serial.printf("humidity : %f\n", humidity);

        String parsedJsonToString;
        serializeJson(json, parsedJsonToString);
        int httpCode = https.POST(parsedJsonToString);
      if (httpCode > 0) {
        Serial.printf("[HTTPS] Post... code: %d\n", httpCode);

        // file found at server
        if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
          String payload = https.getString();
          Serial.println(payload);
        }
      } else {
        Serial.printf("[HTTPS] Post... failed, error: %s\n", https.errorToString(httpCode).c_str());
      }

      https.end();
    } else {
      Serial.printf("[HTTPS] Unable to connect\n");
    }
  }

  Serial.println();
  Serial.println("Waiting 2 hours before the next round...");
  delay(1000 * 60 * 60 * 2);
}