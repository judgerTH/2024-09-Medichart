package com.example.medichart.translator.api;

import com.google.cloud.translate.TranslateOptions;
import com.google.cloud.translate.Translation;
import com.google.cloud.translate.Translate.TranslateOption;

public class Translate {

    public static String translateText(String text, String targetLanguage) {
        Translation translation = TranslateOptions.getDefaultInstance().getService()
                .translate(text, TranslateOption.targetLanguage(targetLanguage));

        return translation.getTranslatedText();
    }
}
