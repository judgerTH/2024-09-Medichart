/*
package com.example.medichart.login.controller;

import com.example.medichart.login.entity.FindUser;
import com.example.medichart.login.repository.FindUserRepository;
import com.example.medichart.login.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;
import java.util.Random;

@Controller
public class FindUserController {

    @Autowired
    private EmailService emailService;

    @Autowired
    private FindUserRepository findUserRepository;

    @GetMapping("/findid")
    public String showFindIdForm() {
        return "findid"; // findid.html 페이지를 반환
    }

    @PostMapping("/findid")
    public String processFindId(@RequestParam String email, Model model) {
        Optional<FindUser> userOpt = findUserRepository.findByEmail(email);

        // 입력한 이메일로 등록된 사용자가 없는 경우, 새로운 사용자로 간주하여 데이터베이스에 등록하고 인증 코드를 발송한다.
        FindUser findUser = userOpt.orElseGet(() -> {
            FindUser newFindUser = new FindUser();
            newFindUser.setEmail(email);
            findUserRepository.save(newFindUser);
            return newFindUser;
        });

        String verificationCode = generateVerificationCode();
        findUser.setVerificationToken(verificationCode); // 인증 코드를 사용자 엔티티에 저장
        findUserRepository.save(findUser); // 데이터베이스에 저장
        emailService.sendEmail(email, "아이디 찾기 인증 코드", "인증 코드: " + verificationCode);
        model.addAttribute("message", "인증 코드가 이메일로 전송되었습니다.");
        model.addAttribute("verificationCode", verificationCode);
        model.addAttribute("email", email);
        return "verify"; // verify.html 페이지를 반환
    }

    @GetMapping("/findpassword")
    public String showFindPasswordForm() {
        return "findpassword"; // findpassword.html 페이지를 반환
    }

    @PostMapping("/findpassword")
    public String processFindPassword(@RequestParam String username, @RequestParam String email, Model model) {
        Optional<FindUser> userOpt = findUserRepository.findByUsernameAndEmail(username, email);

        // 사용자 이름(username)과 이메일로 등록된 사용자가 없는 경우, 새로운 사용자로 간주하여 데이터베이스에 등록하고 인증 코드를 발송한다.
        FindUser findUser = userOpt.orElseGet(() -> {
            FindUser newFindUser = new FindUser();
            newFindUser.setUsername(username);
            newFindUser.setEmail(email);
            findUserRepository.save(newFindUser);
            return newFindUser;
        });

        String verificationCode = generateVerificationCode();
        findUser.setVerificationToken(verificationCode); // 인증 코드를 사용자 엔티티에 저장
        findUserRepository.save(findUser); // 데이터베이스에 저장
        emailService.sendEmail(email, "비밀번호 찾기 인증 코드", "인증 코드: " + verificationCode);
        model.addAttribute("message", "인증 코드가 이메일로 전송되었습니다.");
        model.addAttribute("verificationCode", verificationCode);
        model.addAttribute("username", username);
        model.addAttribute("email", email);
        return "verifypassword"; // verifypassword.html 페이지를 반환
    }

    @PostMapping("/verify")
    public String verifyCode(@RequestParam String email, @RequestParam String code, @RequestParam String verificationCode, Model model) {
        Optional<FindUser> userOpt = findUserRepository.findByEmail(email);
        if (!userOpt.isPresent()) {
            model.addAttribute("error", "사용자를 찾을 수 없습니다.");
            return "verify"; // 사용자를 찾을 수 없는 경우 verify.html 페이지를 반환
        }

        if (code.equals(verificationCode)) {
            FindUser findUser = userOpt.get();
            model.addAttribute("username", findUser.getUsername());
            return "showid"; // showid.html 페이지를 반환
        } else {
            model.addAttribute("error", "인증 코드가 일치하지 않습니다.");
            return "verify"; // 인증 코드가 일치하지 않는 경우 verify.html 페이지를 반환
        }
    }

    @PostMapping("/verifypassword")
    public String verifyPassword(@RequestParam String email, @RequestParam String code, @RequestParam String verificationCode, Model model) {
        Optional<FindUser> userOpt = findUserRepository.findByEmail(email);
        if (!userOpt.isPresent()) {
            model.addAttribute("error", "사용자를 찾을 수 없습니다.");
            return "verifypassword"; // 사용자를 찾을 수 없는 경우 verifypassword.html 페이지를 반환
        }

        if (code.equals(verificationCode)) {
            FindUser findUser = userOpt.get();
            model.addAttribute("username", findUser.getUsername());
            return "resetpassword"; // resetpassword.html 페이지를 반환
        } else {
            model.addAttribute("error", "인증 코드가 일치하지 않습니다.");
            return "verifypassword"; // 인증 코드가 일치하지 않는 경우 verifypassword.html 페이지를 반환
        }
    }

    // 랜덤 인증 코드 생성 메서드
    private String generateVerificationCode() {
        Random random = new Random();
        int code = 100000 + random.nextInt(900000); // 100000부터 999999 사이의 임의의 숫자 생성
        return String.valueOf(code);
    }
}
*/
