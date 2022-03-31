import 'package:flutter/material.dart';

import 'app_theme.dart';

class AppThemeLight extends AppTheme {
  static AppThemeLight? _instance;
  static AppThemeLight get instance {
    return _instance ??= AppThemeLight._init();
  }

  static const _FONT_FAMILY = 'POPPINS';

  AppThemeLight._init();

  @override
  ThemeData get theme => ThemeData(
        scaffoldBackgroundColor: const Color(0xFFFFFFFF),
        primaryColor: const Color(0xFFFF6600),
        textTheme: textTheme,
        appBarTheme: appBarTheme,
        floatingActionButtonTheme: floatingActionButtonTheme,
        inputDecorationTheme: inputDecorationTheme,
        textButtonTheme: textButtonThemeData,
        elevatedButtonTheme: elevatedButtonTheme,
      );

  TextButtonThemeData get textButtonThemeData {
    return TextButtonThemeData(
      style: ButtonStyle(
        foregroundColor:
            MaterialStateColor.resolveWith((states) => const Color(0xFFFF6600)),
        overlayColor:
            MaterialStateColor.resolveWith((states) => Colors.transparent),
      ),
    );
  }

  TextTheme get textTheme {
    return const TextTheme(
      bodyText1: TextStyle(
        color: Color(0xFFFF6600),
      ),
      bodyText2: TextStyle(
        color: Color(0xFFFF944D),
      ),
      subtitle1: TextStyle(
        color: Color.fromARGB(255, 0, 0, 0),
      ),
    );
  }

  AppBarTheme get appBarTheme {
    return const AppBarTheme(
      color: Colors.white,
      elevation: 0,
      centerTitle: true,
      titleTextStyle: TextStyle(fontSize: 20, color: Color(0xFF161F3D)),
      iconTheme: IconThemeData(
        color: Color(0xFF161F3D), //change your color here
      ),
      actionsIconTheme: IconThemeData(
        color: Color(0xFF161F3D), //change your color here
      ),
    );
  }

  InputDecorationTheme get inputDecorationTheme {
    return const InputDecorationTheme(
      labelStyle: TextStyle(
        color: Color(0xFF2C344F),
      ),
      hintStyle: TextStyle(
        color: Color(0xFF2C344F),
      ),
      errorStyle: TextStyle(
        color: Color(0xFF2C344F),
      ),
      helperStyle: TextStyle(
        color: Color(0xFF2C344F),
      ),
      border: OutlineInputBorder(
        borderSide: BorderSide(
          color: Color(0xFF2C344F),
        ),
      ),
      enabledBorder: OutlineInputBorder(
        borderSide: BorderSide(
          color: Color(0xFF2C344F),
        ),
      ),
      focusedBorder: OutlineInputBorder(
        borderSide: BorderSide(
          color: Color(0xFF2C344F),
        ),
      ),
    );
  }

  FloatingActionButtonThemeData get floatingActionButtonTheme {
    return const FloatingActionButtonThemeData(
      backgroundColor: Colors.orange,
      elevation: 0,
    );
  }

  ElevatedButtonThemeData get elevatedButtonTheme {
    return ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        primary: const Color(0xFF5271FF),
        shadowColor: Colors.transparent,
        elevation: 0,
      ),
    );
  }
}
