package com.example.medichart.service;

<<<<<<< HEAD
import com.example.medichart.domain.User;
import com.example.medichart.dto.*;
=======
import com.example.medichart.entity.UserEntity;
import com.example.medichart.dto.*;
import com.example.medichart.repository.UserRepository;  // 추가
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OauthUserService extends DefaultOAuth2UserService {

<<<<<<< HEAD
=======
    private final UserRepository userRepository;  // 추가
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        String registrationId = userRequest.getClientRegistration().getRegistrationId();
<<<<<<< HEAD
        OAuth2Response oAuth2Response = null;       // 구글 또는 네이버 등 확장성을 염두해 부모 타입으로 구현
=======
        OAuth2Response oAuth2Response = null;
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
        if("kakao".equals(registrationId)){
            oAuth2Response = new KakaoResponse(oAuth2User.getAttributes());
        } else if ("naver".equals(registrationId)) {
            oAuth2Response = new NaverResponse(oAuth2User.getAttributes());
<<<<<<< HEAD
        }
        else if ("google".equals(registrationId)) {
        oAuth2Response = new GoogleResponse(oAuth2User.getAttributes());
        }
//        etc OAuth...
//        else if ("google".equals(registrationId)) {
//            ...
//        } else if ("naver".equals(registrationId)) {
//
//        }

        //회원 등록
        User user = User.builder()
                .nickName(oAuth2Response.getName())
                .role("ROLE_USER")
                .build();
//        userRepository.save(user);

        UserDto userDTO = UserDto.builder()
                .nickName(user.getNickName())
                .role(user.getRole())
                .build();

        return new CustomOAuth2User(userDTO);

    }
=======
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

>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
}
