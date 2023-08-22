package com.planty.api.gm.account.response;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class GmLoginResponse {

    private Long gid;
    private String id;
    private String nickname;
    private String introduce;

}
