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
      );
}
