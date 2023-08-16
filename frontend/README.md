Planty 대표 사진
# PLANTY
실시간 화상 채팅을 통한 홈가드닝 컨설팅 서비스
# 목차
0. 프로젝트 소개
2. 주요 기능
3. 서비스 화면
4. 기술 스택 소개
5. 개발 환경
6. 설계 문서
7. 팀원 소개
# 프로젝트 소개
## 기획 배경
현대 사회에서는 고도화된 경쟁, 급격한 변화, 디지털화된 생활 등으로 인해 많은 사람들이 높은 스트레스를 경험하고 있습니다. 이에 따라 정신적인 안정과 평온함을 찾는 데 관심을 두는 사람들이 증가하고 있습니다. 동시에 치유 농업, 특히 홈가드닝은 그들의 관심을 끌며 일상에서 자연과 소통하며 스트레스를 해소하는 방법으로 주목받고 있습니다.

1. 스트레스 증가
현대 사회에서는 일과 생활의 급격한 변화로 인해 스트레스가 증가하고 정신적인 안정을 찾는 것이 어려워진 상황입니다. 여기에는 불규칙한 일정, 디지털화로 인한 정보 과부하, 소셜 미디어의 영향 등이 영향을 미치고 있습니다.
2. 치유 농업의 부상
치유 농업은 자연과의 소통을 통해 심리적인 안정과 치유를 추구하는 농업 활동을 의미합니다. 홈가드닝은 그 중에서도 자연을 직접 키우는 경험을 제공하면서 더욱 가까운 연결을 형성합니다. 이러한 홈가드닝은 식물을 키우고 관리하며 자연과 조화를 이루는 데서 나오는 즐거움과 평온감을 제공합니다.

## 서비스 제안
"실시간 화상 채팅을 통한 홈가드닝 컨설팅 서비스" **PLANTY**는 스트레스를 경감하고 정서적 안정을 찾기 위한 사람들에게 자연과의 소통을 통한 치유할 수 있도록 홈가드닝 컨설팅을 제공하는 서비스입니다. 이 서비스는 다음 두 가지 특징을 가지며, 현대 사회의 스트레스와 성공적인 홈가드닝 대한 고민을 해결해 나갈 것입니다.

1. 실시간 화상 채팅 컨설팅
사용자들은 전문 홈가드닝 컨설턴트와 실시간 화상 채팅을 통해 식물 관리에 대한 조언, 가이드, 질문에 답을 받을 수 있습니다. 직접적인 상담을 통해 사용자는 더욱 자신감을 가지고 식물을 키울 수 있을 것입니다.

2. 개별 맞춤 서비스
각 사용자의 환경과 선호도에 따라 식물 선택, 관리 방법, 치유 효과 등을 맞춤형으로 제공합니다. 이를 통해 사용자들은 자신의 상황에 맞게 치유 농업을 체험하며 스트레스를 더욱 효과적으로 해소할 수 있을 것입니다.

# 주요 기능
- WebRTC
  - 응급실 서비스
  - 구독 컨설팅 서비스
- 아두이노를 통한 실시간 온습도 정보 제공
- 


# 서비스 화면

# 기술 스택 소개

# 개발환경

# 설계문서

# 팀원 소개
```
frontend
├─ .DS_Store
├─ .env
├─ .eslintrc.json
├─ .prettierrc
├─ .vscode
│  └─ settings.json
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ fonts
│  │  ├─ icons
│  │  │  ├─ Back.svg
│  │  │  ├─ Bookmark.svg
│  │  │  ├─ Calendar.svg
│  │  │  ├─ Chat.svg
│  │  │  ├─ Close.svg
│  │  │  ├─ ColorCalendar.svg
│  │  │  ├─ Google.svg
│  │  │  ├─ Greenmate.svg
│  │  │  ├─ Leaf.svg
│  │  │  ├─ LeafFill.svg
│  │  │  ├─ LeafGray.svg
│  │  │  ├─ LeafGreenFill.svg
│  │  │  ├─ Monitor.svg
│  │  │  ├─ Next.svg
│  │  │  ├─ NextGrey.svg
│  │  │  ├─ Paycomplete.svg
│  │  │  ├─ Ticket.svg
│  │  │  ├─ TicketSet.svg
│  │  │  ├─ Time.svg
│  │  │  ├─ User.svg
│  │  │  ├─ arrow
│  │  │  │  ├─ ChatUpWhite.svg
│  │  │  │  ├─ DownBlack300.svg
│  │  │  │  └─ UpBlack300.svg
│  │  │  ├─ consultingMenu
│  │  │  │  ├─ Chart.svg
│  │  │  │  ├─ ChatOff.svg
│  │  │  │  ├─ ChatOn.svg
│  │  │  │  ├─ MicOff.svg
│  │  │  │  ├─ MicOn.svg
│  │  │  │  ├─ Power.svg
│  │  │  │  ├─ VideoOff.svg
│  │  │  │  └─ VideoOn.svg
│  │  │  ├─ logo
│  │  │  │  ├─ Planty.svg
│  │  │  │  ├─ PlantyLogo.svg
│  │  │  │  └─ sprout.svg
│  │  │  ├─ menu
│  │  │  │  ├─ Bookmark.svg
│  │  │  │  ├─ Calendar.svg
│  │  │  │  ├─ History.svg
│  │  │  │  ├─ Info.svg
│  │  │  │  ├─ Receipt.svg
│  │  │  │  └─ Setting.svg
│  │  │  ├─ pageTitle
│  │  │  │  ├─ Capsule.svg
│  │  │  │  ├─ Leaf.svg
│  │  │  │  └─ ShoppingBag.svg
│  │  │  ├─ product
│  │  │  │  ├─ product1.svg
│  │  │  │  ├─ product2.svg
│  │  │  │  └─ productimg.svg
│  │  │  └─ tabbar
│  │  │     ├─ Emergency.svg
│  │  │     ├─ GreenEmergencyImg.svg
│  │  │     ├─ GreenHomeImg.svg
│  │  │     ├─ GreenMypageImg.svg
│  │  │     ├─ GreenSubscribeImg.svg
│  │  │     ├─ Home.svg
│  │  │     ├─ Mypage.svg
│  │  │     └─ Shop.svg
│  │  └─ images
│  │     ├─ Logo.svg
│  │     ├─ SadPlant.svg
│  │     └─ defaultImage.png
│  ├─ components
│  │  ├─ .DS_Store
│  │  ├─ atoms
│  │  │  ├─ booking
│  │  │  │  ├─ Booking
│  │  │  │  │  ├─ Booking.scss
│  │  │  │  │  └─ Booking.tsx
│  │  │  │  ├─ BookingCalendar
│  │  │  │  │  ├─ BookingCalendar.scss
│  │  │  │  │  └─ BookingCalendar.tsx
│  │  │  │  └─ FullScheduleCalendar
│  │  │  │     ├─ FullScheduleCalendar.scss
│  │  │  │     └─ FullScheduleCalendar.tsx
│  │  │  ├─ common
│  │  │  │  ├─ AreaTitle
│  │  │  │  │  ├─ AreaTitle.scss
│  │  │  │  │  └─ AreaTitle.tsx
│  │  │  │  ├─ Button
│  │  │  │  │  ├─ Button.scss
│  │  │  │  │  └─ Button.tsx
│  │  │  │  ├─ ChartButton
│  │  │  │  │  ├─ ChartButton.scss
│  │  │  │  │  └─ ChartButton.tsx
│  │  │  │  ├─ ChatInputBar
│  │  │  │  │  ├─ ChatInputBar.scss
│  │  │  │  │  └─ ChatInputBar.tsx
│  │  │  │  ├─ ChatMessage
│  │  │  │  │  ├─ ChatMessage.scss
│  │  │  │  │  └─ ChatMessage.tsx
│  │  │  │  ├─ DetailButton
│  │  │  │  │  ├─ DetailButton.scss
│  │  │  │  │  └─ DetailButton.tsx
│  │  │  │  ├─ EmptyItem
│  │  │  │  │  ├─ EmptyItem.scss
│  │  │  │  │  └─ EmptyItem.tsx
│  │  │  │  ├─ FilterToggle
│  │  │  │  │  ├─ FilterToggle.scss
│  │  │  │  │  └─ FilterToggle.tsx
│  │  │  │  ├─ IconText
│  │  │  │  │  ├─ IconText.scss
│  │  │  │  │  └─ IconText.tsx
│  │  │  │  ├─ InfoListItem
│  │  │  │  │  ├─ InfoListItem.scss
│  │  │  │  │  └─ InfoListItem.tsx
│  │  │  │  ├─ InfoRow
│  │  │  │  │  ├─ InfoRow.scss
│  │  │  │  │  └─ InfoRow.tsx
│  │  │  │  ├─ ListItemTitle
│  │  │  │  │  ├─ ListItemTitle.scss
│  │  │  │  │  └─ ListItemTitle.tsx
│  │  │  │  ├─ MiniShortcutButton
│  │  │  │  │  ├─ MiniShortcutButton.scss
│  │  │  │  │  └─ MiniShortcutButton.tsx
│  │  │  │  ├─ PageTitle
│  │  │  │  │  ├─ PageTitle.scss
│  │  │  │  │  └─ PageTitle.tsx
│  │  │  │  ├─ PageTitleButton
│  │  │  │  │  ├─ PageTitleButton.scss
│  │  │  │  │  └─ PageTitleButton.tsx
│  │  │  │  ├─ PlantyLogo
│  │  │  │  │  ├─ PlantyLogo.scss
│  │  │  │  │  └─ PlantyLogo.tsx
│  │  │  │  ├─ PurchaseButton
│  │  │  │  │  ├─ PurchaseButton.scss
│  │  │  │  │  └─ PurchaseButton.tsx
│  │  │  │  ├─ RectShortcutButton
│  │  │  │  │  ├─ RectShortcutButton.scss
│  │  │  │  │  └─ RectShortcutButton.tsx
│  │  │  │  ├─ ReservationTimeItem
│  │  │  │  │  ├─ ReservationTimeItem.scss
│  │  │  │  │  └─ ReservationTimeItem.tsx
│  │  │  │  ├─ ScrollToTop
│  │  │  │  │  └─ ScrollToTop.tsx
│  │  │  │  ├─ SquareShortcutButton
│  │  │  │  │  ├─ SquareShortcutButton.scss
│  │  │  │  │  └─ SquareShortcutButton.tsx
│  │  │  │  ├─ TabBarItem
│  │  │  │  │  ├─ TabBarItem.scss
│  │  │  │  │  └─ TabBarItem.tsx
│  │  │  │  └─ ToggleButton
│  │  │  │     ├─ ToggleButton.scss
│  │  │  │     └─ ToggleButton.tsx
│  │  │  ├─ consulting
│  │  │  │  ├─ JoinButton
│  │  │  │  │  ├─ JoinButton.scss
│  │  │  │  │  └─ JoinButton.tsx
│  │  │  │  ├─ LoadingSpinner
│  │  │  │  │  └─ LoadingSpinner.tsx
│  │  │  │  ├─ OpenViduVideo
│  │  │  │  │  ├─ OpenViduVideo.scss
│  │  │  │  │  └─ OpenViduVideo.tsx
│  │  │  │  └─ VideoConsultingMenuItem
│  │  │  │     ├─ VideoConsultingMenuItem.scss
│  │  │  │     └─ VideoConsultingMenuItem.tsx
│  │  │  ├─ emergency
│  │  │  │  └─ CurrentGreenmateCount
│  │  │  │     ├─ CurrentGreenmateCount.scss
│  │  │  │     └─ CurrentGreenmateCount.tsx
│  │  │  ├─ pay
│  │  │  │  ├─ address
│  │  │  │  │  ├─ Address.scss
│  │  │  │  │  └─ Address.tsx
│  │  │  │  ├─ buyerinfo
│  │  │  │  │  ├─ BuyerInfo.scss
│  │  │  │  │  └─ BuyerInfo.tsx
│  │  │  │  ├─ endbutton
│  │  │  │  │  ├─ EndButton.scss
│  │  │  │  │  └─ EndButton.tsx
│  │  │  │  ├─ paycheck
│  │  │  │  │  ├─ PayCheck.scss
│  │  │  │  │  └─ PayCheck.tsx
│  │  │  │  ├─ paycomplete
│  │  │  │  │  ├─ PayComplete.scss
│  │  │  │  │  └─ PayComplete.tsx
│  │  │  │  └─ productinfo
│  │  │  │     ├─ ProductInfo.scss
│  │  │  │     └─ ProductInfo.tsx
│  │  │  ├─ productdetail
│  │  │  │  ├─ imgdetail
│  │  │  │  │  ├─ ImgDetail.scss
│  │  │  │  │  └─ ImgDetail.tsx
│  │  │  │  ├─ infolist
│  │  │  │  │  ├─ InfoList.scss
│  │  │  │  │  └─ InfoList.tsx
│  │  │  │  ├─ price
│  │  │  │  │  ├─ price.scss
│  │  │  │  │  └─ price.tsx
│  │  │  │  ├─ productimg
│  │  │  │  │  ├─ ProductImg.scss
│  │  │  │  │  └─ ProductImg.tsx
│  │  │  │  └─ title
│  │  │  │     ├─ title.scss
│  │  │  │     └─ title.tsx
│  │  │  ├─ subscribe
│  │  │  │  └─ SubscribeStateBadge
│  │  │  │     ├─ SubscribeStateBadge.scss
│  │  │  │     └─ SubscribeStateBadge.tsx
│  │  │  └─ user
│  │  │     ├─ GoogleLoginButton
│  │  │     │  ├─ GoogleLoginButton.scss
│  │  │     │  └─ GoogleLoginButton.tsx
│  │  │     └─ UserProfilePhoto
│  │  │        ├─ UserProfilePhoto.scss
│  │  │        └─ UserProfilePhoto.tsx
│  │  ├─ layout
│  │  │  ├─ Page
│  │  │  │  ├─ BookingManagementPageLayout
│  │  │  │  │  ├─ BookingManagementPageLayout.scss
│  │  │  │  │  └─ BookingManagementPageLayout.tsx
│  │  │  │  ├─ BookingPageLayout
│  │  │  │  │  ├─ BookingPageLayout.scss
│  │  │  │  │  └─ BookingPageLayout.tsx
│  │  │  │  ├─ ConsultingHistoryPageLayout
│  │  │  │  │  ├─ ConsultingHistoryPageLayout.scss
│  │  │  │  │  └─ ConsultingHistoryPageLayout.tsx
│  │  │  │  ├─ ConsultingLoadingPageLayout
│  │  │  │  │  ├─ ConsultingLoadingPageLayout.scss
│  │  │  │  │  └─ ConsultingLoadingPageLayout.tsx
│  │  │  │  ├─ ConsultingParticipatePageLayout
│  │  │  │  │  ├─ ConsultingParticipatePageLayout.scss
│  │  │  │  │  └─ ConsultingParticipatePageLayout.tsx
│  │  │  │  ├─ EmergencyHistoryPageLayout
│  │  │  │  │  ├─ EmergencyHistoryPageLayout.scss
│  │  │  │  │  └─ EmergencyHistoryPageLayout.tsx
│  │  │  │  ├─ EmergencyPageLayout
│  │  │  │  │  ├─ EmergencyPageLayout.scss
│  │  │  │  │  └─ EmergencyPageLayout.tsx
│  │  │  │  ├─ EmergencyParticipatePageLayout
│  │  │  │  │  └─ EmergencyParticipatePageLayout
│  │  │  │  │     ├─ EmergencyParticipatePageLayout.scss
│  │  │  │  │     └─ EmergencyParticipatePageLayout.tsx
│  │  │  │  ├─ ErrorPageLayout
│  │  │  │  │  ├─ ErrorPageLayout.scss
│  │  │  │  │  └─ ErrorPageLayout.tsx
│  │  │  │  ├─ HomePageLayout
│  │  │  │  │  ├─ HomePageLayout.scss
│  │  │  │  │  └─ HomePageLayout.tsx
│  │  │  │  ├─ LoadingPageLayout
│  │  │  │  │  ├─ LoadingPageLayout.scss
│  │  │  │  │  └─ LoadingPageLayout.tsx
│  │  │  │  ├─ LoginPageLayout
│  │  │  │  │  ├─ LoginPageLayout.scss
│  │  │  │  │  └─ LoginPageLayout.tsx
│  │  │  │  ├─ MypagePageLayout
│  │  │  │  │  ├─ MypagePageLayout.scss
│  │  │  │  │  └─ MypagePageLayout.tsx
│  │  │  │  ├─ PayLoadingPageLayout
│  │  │  │  │  ├─ PayLoadingPageLayout.scss
│  │  │  │  │  └─ PayLoadingPageLayout.tsx
│  │  │  │  ├─ ShopDetailPageLayout
│  │  │  │  │  ├─ ShopDetailPageLayout.scss
│  │  │  │  │  └─ ShopDetailPageLayout.tsx
│  │  │  │  ├─ ShopPageLayout
│  │  │  │  │  ├─ ShopPageLayout.scss
│  │  │  │  │  └─ ShopPageLayout.tsx
│  │  │  │  ├─ ShopPayPageLayout
│  │  │  │  │  ├─ ShopPayPageLayout.scss
│  │  │  │  │  └─ ShopPayPageLayout.tsx
│  │  │  │  ├─ SubConsultingHistoryPageLayout
│  │  │  │  │  ├─ SubConsultingHistoryPageLayout.scss
│  │  │  │  │  └─ SubConsultingHistoryPageLayout.tsx
│  │  │  │  └─ VideoConsultingPageLayout
│  │  │  │     ├─ VideoConsultingPageLayout.scss
│  │  │  │     └─ VideoConsultingPageLayout.tsx
│  │  │  ├─ booking
│  │  │  │  └─ BookingListItemLayout
│  │  │  │     ├─ BookingListItemLayout.scss
│  │  │  │     └─ BookingListItemLayout.tsx
│  │  │  ├─ common
│  │  │  │  ├─ ContentsLayout
│  │  │  │  │  ├─ ContentsLayout.scss
│  │  │  │  │  └─ ContentsLayout.tsx
│  │  │  │  ├─ PageLayout
│  │  │  │  │  ├─ PageLayout.scss
│  │  │  │  │  └─ PageLayout.tsx
│  │  │  │  ├─ StatusDescriptionLayout
│  │  │  │  │  ├─ StatusDescriptionLayout.scss
│  │  │  │  │  └─ StatusDescriptionLayout.tsx
│  │  │  │  └─ TabBarLayout
│  │  │  │     ├─ TabBarLayout.scss
│  │  │  │     └─ TabBarLayout.tsx
│  │  │  ├─ mypage
│  │  │  │  └─ MypageSubMenuDetailPageLayout
│  │  │  │     ├─ MypageSubMenuDetailPageLayout.scss
│  │  │  │     └─ MypageSubMenuDetailPageLayout.tsx
│  │  │  ├─ navigation
│  │  │  │  ├─ NavigationLayout
│  │  │  │  │  ├─ NavigationLayout.scss
│  │  │  │  │  └─ NavigationLayout.tsx
│  │  │  │  └─ TabBarLayout
│  │  │  │     ├─ TabBarLayout.scss
│  │  │  │     └─ TabBarLayout.tsx
│  │  │  ├─ shop
│  │  │  │  └─ ProductListItemLayout
│  │  │  │     ├─ ProductListItemLayout.scss
│  │  │  │     └─ ProductListItemLayout.tsx
│  │  │  └─ subscirbe
│  │  │     ├─ ConsultingInfoLayout
│  │  │     │  ├─ ConsultingInfoLayout.scss
│  │  │     │  └─ ConsultingInfoLayout.tsx
│  │  │     ├─ SubscribeDetailItemLayout
│  │  │     │  ├─ SubscribeDetailItemLayout.scss
│  │  │     │  └─ SubscribeDetailItemLayout.tsx
│  │  │     ├─ SubscribeDetailPageLayout
│  │  │     │  ├─ SubscribeDetailPageLayout.scss
│  │  │     │  └─ SubscribeDetailPageLayout.tsx
│  │  │     ├─ SubscribeListItemLayout
│  │  │     │  ├─ SubscribeListItemLayout.scss
│  │  │     │  └─ SubscribeListItemLayout.tsx
│  │  │     └─ SubscribePageLayout
│  │  │        ├─ SubscribePageLayout.scss
│  │  │        └─ SubscribePageLayout.tsx
│  │  └─ organisms
│  │     ├─ booking
│  │     │  ├─ BookingList
│  │     │  │  ├─ BookingList.scss
│  │     │  │  └─ BookingList.tsx
│  │     │  ├─ BookingListItem
│  │     │  │  ├─ BookingListItem.scss
│  │     │  │  └─ BookingListItem.tsx
│  │     │  └─ BookingTimeList
│  │     │     ├─ BookingTimeList.scss
│  │     │     └─ BookingTimeList.tsx
│  │     ├─ common
│  │     │  ├─ BadgeDescription
│  │     │  │  └─ BadgeDescription.tsx
│  │     │  ├─ BannerSlider
│  │     │  │  ├─ BannerSlider.scss
│  │     │  │  └─ BannerSlider.tsx
│  │     │  ├─ CustomAlert
│  │     │  │  ├─ CustomAlert.scss
│  │     │  │  └─ CustomAlert.tsx
│  │     │  ├─ Header
│  │     │  │  ├─ Header.scss
│  │     │  │  └─ Header.tsx
│  │     │  ├─ InfoList
│  │     │  │  └─ InfoList.tsx
│  │     │  ├─ Navigation
│  │     │  │  └─ Navigation.tsx
│  │     │  └─ TabBar
│  │     │     ├─ TabBar.scss
│  │     │     └─ TabBar.tsx
│  │     ├─ consulting
│  │     │  ├─ ParticipateBox
│  │     │  │  ├─ ParticipateBox.scss
│  │     │  │  └─ ParticipateBox.tsx
│  │     │  ├─ UserVideoComponent
│  │     │  │  ├─ UserVideoComponent.scss
│  │     │  │  └─ UserVideoComponent.tsx
│  │     │  └─ VideoConsultingMenu
│  │     │     ├─ VideoConsultingMenu.scss
│  │     │     └─ VideoConsultingMenu.tsx
│  │     ├─ emergency
│  │     │  ├─ CheckEquip
│  │     │  │  ├─ CheckEquip.scss
│  │     │  │  └─ CheckEquip.tsx
│  │     │  ├─ TicketInfo
│  │     │  │  ├─ TicketInfo.scss
│  │     │  │  └─ TicketInfo.tsx
│  │     │  └─ TicketRemains
│  │     │     ├─ TicketRemains.scss
│  │     │     └─ TicketRemains.tsx
│  │     ├─ mypage
│  │     │  ├─ ConsultingDetail
│  │     │  │  ├─ ConsultingDetail.scss
│  │     │  │  └─ ConsultingDetail.tsx
│  │     │  ├─ ConsultingDetailList
│  │     │  │  ├─ ConsultingDetailList.scss
│  │     │  │  └─ ConsultingDetailList.tsx
│  │     │  ├─ DetailMenuItem
│  │     │  │  ├─ DetailMenuItem.scss
│  │     │  │  └─ DetailMenuItem.tsx
│  │     │  ├─ DetailMenuList
│  │     │  │  ├─ DetailMenuList.scss
│  │     │  │  └─ DetailMenuList.tsx
│  │     │  ├─ EmergencyDetail
│  │     │  │  ├─ EmergencyDetail.scss
│  │     │  │  └─ EmergencyDetail.tsx
│  │     │  ├─ EmergencyDetailList
│  │     │  │  ├─ EmergencyDetailList.scss
│  │     │  │  └─ EmergencyDetailList.tsx
│  │     │  ├─ MypageConsultingDetail
│  │     │  │  ├─ MypageConsultingDetail.scss
│  │     │  │  └─ MypageConsultingDetail.tsx
│  │     │  ├─ MypageConsultingDetailList
│  │     │  │  ├─ MypageConsultingDetailList.scss
│  │     │  │  └─ MypageConsultingDetailList.tsx
│  │     │  ├─ MypageSubmenuItem
│  │     │  │  ├─ MypageSubmenuItem.scss
│  │     │  │  └─ MypageSubmenuItem.tsx
│  │     │  ├─ MypageSubmenuList
│  │     │  │  ├─ MypageSubmenuList.scss
│  │     │  │  └─ MypageSubmenuList.tsx
│  │     │  └─ UserProfile
│  │     │     ├─ UserProfile.scss
│  │     │     └─ UserProfile.tsx
│  │     ├─ shop
│  │     │  ├─ FilterToggleBar
│  │     │  │  ├─ FilterToggleBar.scss
│  │     │  │  └─ FilterToggleBar.tsx
│  │     │  ├─ Level
│  │     │  │  ├─ Level.scss
│  │     │  │  └─ Level.tsx
│  │     │  ├─ PayUserInfoBox
│  │     │  │  ├─ PayUserInfoBox.scss
│  │     │  │  └─ PayUserInfoBox.tsx
│  │     │  └─ ProductListItem
│  │     │     └─ ProductListItem.tsx
│  │     ├─ subscribe
│  │     │  ├─ ConsultingInfo
│  │     │  │  ├─ ConsultingInfo.scss
│  │     │  │  └─ ConsultingInfo.tsx
│  │     │  ├─ ConsultingStickerList
│  │     │  │  ├─ ConsultingStickerList.scss
│  │     │  │  └─ ConsultingStickerList.tsx
│  │     │  ├─ PlantChart
│  │     │  │  ├─ PlantChart.scss
│  │     │  │  └─ PlantChart.tsx
│  │     │  ├─ SubscribeDetailItem
│  │     │  │  └─ SubscribeDetailItem.tsx
│  │     │  ├─ SubscribeList
│  │     │  │  ├─ SubscribeList.scss
│  │     │  │  └─ SubscribeList.tsx
│  │     │  ├─ SubscribeListItem
│  │     │  │  └─ SubscribeListItem.tsx
│  │     │  └─ SubscribeSlider
│  │     │     ├─ SubscribeSlider.scss
│  │     │     └─ SubscribeSlider.tsx
│  │     └─ userVideo
│  │        └─ OpenViduVideoComponent
│  │           └─ OpenViduVideoComponent.tsx
│  ├─ constants
│  │  ├─ common
│  │  │  ├─ Booking.ts
│  │  │  ├─ Date.ts
│  │  │  ├─ Labels.ts
│  │  │  └─ StatusDescList.ts
│  │  ├─ menu
│  │  │  ├─ MypageMenuState.ts
│  │  │  └─ VideoConsultingMenu.tsx
│  │  ├─ storage
│  │  │  ├─ LocalStorage.ts
│  │  │  └─ SessionStorage.ts
│  │  ├─ subscribe
│  │  │  └─ SubscribeState.ts
│  │  └─ tabbar
│  │     └─ TabBar.tsx
│  ├─ dummy.ts
│  ├─ index.tsx
│  ├─ pages
│  │  ├─ Consulting
│  │  │  ├─ ChatConsulting
│  │  │  ├─ ConsultingParticipatePage.tsx
│  │  │  └─ VideoConsulting
│  │  │     └─ VideoConsultingPage.tsx
│  │  ├─ Develop.tsx
│  │  ├─ Emergency
│  │  │  ├─ EmergencyHistoryPage.tsx
│  │  │  ├─ EmergencyPage.tsx
│  │  │  └─ EmergencyParticipatePage.tsx
│  │  ├─ Etc
│  │  │  ├─ ErrorPage.tsx
│  │  │  └─ LoadingPage.tsx
│  │  ├─ Home
│  │  │  └─ HomePage.tsx
│  │  ├─ Mypage
│  │  │  ├─ BookingManagementPage.tsx
│  │  │  ├─ MypagePage.tsx
│  │  │  ├─ MypageSubMenuDetailPage.tsx
│  │  │  └─ SubConsultingHistoryPage.tsx
│  │  ├─ Payment
│  │  │  └─ pages
│  │  │     ├─ Checkout.scss
│  │  │     ├─ Checkout.tsx
│  │  │     ├─ Fail.tsx
│  │  │     ├─ Success.scss
│  │  │     └─ Success.tsx
│  │  ├─ Shop
│  │  │  ├─ ShopDetail.tsx
│  │  │  ├─ ShopPage.tsx
│  │  │  └─ ShopPay.tsx
│  │  ├─ User
│  │  │  └─ LoginPage.tsx
│  │  └─ subscribe
│  │     ├─ Booking
│  │     │  └─ BookingPage.tsx
│  │     ├─ ConsultingHistory
│  │     │  └─ ConsultingHistoryPage.tsx
│  │     ├─ Subscribe
│  │     │  └─ SubscribePage.tsx
│  │     └─ SubscribeDetail
│  │        └─ SubscribeDetailPage.tsx
│  ├─ recoil
│  │  ├─ booking.ts
│  │  ├─ consultingSession.ts
│  │  └─ user.ts
│  ├─ router
│  │  ├─ AppRouter.tsx
│  │  └─ PrivateRoute.tsx
│  ├─ styles
│  │  ├─ base
│  │  │  ├─ _common.scss
│  │  │  ├─ _reset.scss
│  │  │  └─ _variable.scss
│  │  ├─ index.scss
│  │  └─ mixins
│  │     ├─ _common.scss
│  │     ├─ _flex.scss
│  │     └─ _responsive.scss
│  ├─ types
│  │  ├─ common
│  │  │  ├─ global.d.ts
│  │  │  ├─ image.d.ts
│  │  │  ├─ openVidu.d.ts
│  │  │  └─ request.d.ts
│  │  └─ domain
│  │     ├─ Emergency.d.ts
│  │     ├─ booking.d.ts
│  │     ├─ consulting.d.ts
│  │     ├─ product.d.ts
│  │     ├─ subscribe.d.ts
│  │     └─ user.d.ts
│  └─ utils
│     ├─ api
│     │  ├─ auth.ts
│     │  ├─ booking.ts
│     │  ├─ consulting.ts
│     │  ├─ emergency.ts
│     │  ├─ greenmate.ts
│     │  ├─ instance.ts
│     │  ├─ openVidu.ts
│     │  ├─ product.ts
│     │  └─ subscribe.ts
│     ├─ common
│     │  ├─ convertTime.ts
│     │  ├─ formatText.ts
│     │  └─ makeChartData.ts
│     ├─ date
│     │  ├─ formatDate.ts
│     │  └─ isSameDate.ts
│     └─ subscribes
│        ├─ getSubscribeState.ts
│        ├─ responseToSubscribe.ts
│        └─ responseToSubscribeDetail.ts
└─ tsconfig.json

```