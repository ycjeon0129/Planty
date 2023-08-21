package com.planty.api.gm.account.request;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class GmJoinRequest {

    private String id;
    private String pw;
    private String nickname;
    private String introduce;

}
