/*
package com.example.medichart.login.service;

import com.example.medichart.login.dto.*;
import com.example.medichart.login.entity.mail.UserEntity;
import com.example.medichart.login.repository.mail.UserRepository;  // 추가
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OauthUserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;  // 추가

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        String registrationId = userRequest.getClientRegistration().getRegistrationId();
        OAuth2Response oAuth2Response = null;
        if("kakao".equals(registrationId)){
            oAuth2Response = new KakaoResponse(oAuth2User.getAttributes());
        } else if ("naver".equals(registrationId)) {
            oAuth2Response = new NaverResponse(oAuth2User.getAttributes());
        } else if ("google".equals(registrationId)) {
            oAuth2Response = new GoogleResponse(oAuth2User.getAttributes());
        }

        // UserEntity 객체 생성
        UserEntity userEntity = UserEntity.toUserEntity(new InsertMemberDTO(
                oAuth2Response.getUserID(), // OAuth2에서 제공하는 사용자 ID
                "", // 비밀번호는 OAuth 인증에서는 필요 없음
                oAuth2Response.getName(), // 사용자 이름
                oAuth2Response.getEmail() // 사용자 이메일
        ));



        userRepository.save(userEntity);  // UserEntity 객체 저장

        UserDto userDTO = UserDto.builder()
                .nickName(userEntity.getUserName())
                .role("ROLE_USER")
                .build();

        return new CustomOAuth2User(userDTO);
    }

}*/
