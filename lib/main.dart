import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:mobile/core/constants/app/app_constants.dart';
import 'package:mobile/core/init/cache/locale_manager.dart';
import 'package:mobile/core/init/lang/language_manager.dart';
import 'package:mobile/core/init/navigation/navigation_route.dart';
import 'package:mobile/core/init/navigation/navigation_service.dart';
import 'package:mobile/core/init/theme/app_theme.dart';
import 'package:mobile/core/init/theme/light_theme.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/core/widgets/bottombar_view.dart';

Future<void> main() async {
  await _init();

  runApp(EasyLocalization(
    child: const MyApp(),
    supportedLocales: LanguageManager.instance.supportedLocales,
    path: ApplicationConstants.LANG_ASSET_PATH,
  ));
}

Future<void> _init() async {
  WidgetsFlutterBinding.ensureInitialized();
  await LocaleManager.preferencesInit();
  await EasyLocalization.ensureInitialized();
  await setupLocator();
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: AppThemeLight.instance.theme,
      navigatorKey: NavigationService.instance.navigatorKey,
      onGenerateRoute: NavigationRoute.instance.generateRoute,
      localizationsDelegates: context.localizationDelegates,
      supportedLocales: context.supportedLocales,
      locale: context.locale,
      //darkTheme: DarkThemeData(),
      home: const Home(),
      builder: (context, child) {
        return ScrollConfiguration(
          behavior: AvoidGlowBehavior(),
          child: child!,
        );
      },
    );
  }
}

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const BottomBarView();
  }
}
