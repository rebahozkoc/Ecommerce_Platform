import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mobile/core/constants/navigation/navigation_constants.dart';
import 'package:mobile/core/init/navigation/navigation_animation.dart';
import 'package:mobile/main.dart';
import 'package:mobile/view/adress/view/adress_view.dart';
import 'package:mobile/view/search/view/search_view.dart';

class NavigationRoute {
  static final NavigationRoute _instance = NavigationRoute._init();
  static NavigationRoute get instance => _instance;

  NavigationRoute._init();

  Route<dynamic> generateRoute(RouteSettings args) {
    switch (args.name) {
      case NavigationConstants.SEARCH:
        return bottomToTopNavigate(
            const SearchView(), NavigationConstants.SEARCH);
      case NavigationConstants.ADRESS:
        return cupertinoNavigate(
            const AddressView(), NavigationConstants.ADRESS);
      default:
        return defaultNavigate(const Home(), NavigationConstants.DEFAULT);
    }
  }

  MaterialPageRoute defaultNavigate(Widget widget, String pageName) {
    return MaterialPageRoute(
      builder: (context) => widget,
      settings: RouteSettings(name: pageName),
    );
  }

  CupertinoPageRoute cupertinoNavigate(Widget widget, String pageName) {
    return CupertinoPageRoute(
      builder: (context) => widget,
      settings: RouteSettings(name: pageName),
    );
  }

  FadeRouteInstant cupertinoNavigateInstant(Widget widget, String pageName) {
    return FadeRouteInstant(
      builder: (context) => widget,
      settings: RouteSettings(name: pageName),
    );
  }

  MaterialPageRoute leftToRightNavigate(Widget widget, String pageName) {
    return LeftToRight(
      builder: (context) => widget,
      settings: RouteSettings(name: pageName),
    );
  }

  MaterialPageRoute rightToLeftNavigate(Widget widget, String pageName) {
    return RightToLeft(
      builder: (context) => widget,
      settings: RouteSettings(name: pageName),
    );
  }

  CupertinoPageRoute bottomToTopNavigate(Widget widget, String pageName) {
    return CupertinoPageRoute(
      fullscreenDialog: true,
      builder: (context) => widget,
      settings: RouteSettings(name: pageName),
    );
  }

  MaterialPageRoute fadeRouteNavigateInstant(Widget widget, String pageName) {
    return FadeRouteInstant(
      builder: (context) => widget,
      settings: RouteSettings(name: pageName),
    );
  }

  MaterialPageRoute fadeRouteNavigateDelay(Widget widget, String pageName) {
    return FadeRouteWithDelay(
      builder: (context) => widget,
      settings: RouteSettings(name: pageName),
    );
  }

  HeroDialogRoute heroDialogNavigateRoute(Widget widget, String pageName) {
    return HeroDialogRoute(
      builder: (context) => widget,
      settings: RouteSettings(name: pageName),
    );
  }
}
