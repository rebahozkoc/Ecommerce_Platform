import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mobile/core/constants/navigation/navigation_constants.dart';
import 'package:mobile/core/init/navigation/navigation_animation.dart';
import 'package:mobile/core/widgets/bottombar_view.dart';
import 'package:mobile/core/widgets/login_requreid_widget.dart';
import 'package:mobile/view/address/view/change_address_view.dart';
import 'package:mobile/view/auth/login/view/login_view.dart';
import 'package:mobile/view/comments/add_comments/view/add_comments_view.dart';
import 'package:mobile/view/comments/view/comments_view.dart';
import 'package:mobile/view/orders/view/orders_view.dart';
import 'package:mobile/view/address/view/address_view.dart';
import 'package:mobile/view/payment/view/payment_view.dart';
import 'package:mobile/view/product/view/product_view.dart';
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
      case NavigationConstants.LOGIN:
        return bottomToTopNavigate(
            const LoginView(), NavigationConstants.LOGIN);
      case NavigationConstants.ORDERS:
        return bottomToTopNavigate(
            const OrdersView(), NavigationConstants.ORDERS);
      case NavigationConstants.BOTTOM_BAR:
        return bottomToTopNavigate(
            const BottomBarView(), NavigationConstants.BOTTOM_BAR);
      case NavigationConstants.ADRESS:
        return cupertinoNavigate(
            const AddressView(), NavigationConstants.ADRESS);
      case NavigationConstants.PRODUCT:
        return cupertinoNavigate(
            const ProductView(), NavigationConstants.ADRESS);
      case NavigationConstants.PAYMENT:
        return bottomToTopNavigate(
            const PaymentView(), NavigationConstants.PAYMENT);
      case NavigationConstants.CHANGE_ADRESS:
        return bottomToTopNavigate(
            const ChangeAddressView(), NavigationConstants.CHANGE_ADRESS);
      case NavigationConstants.COMMENTS:
        return cupertinoNavigate(
          const CommentsView(), NavigationConstants.COMMENTS);
      case NavigationConstants.ADD_COMMENT:
        return cupertinoNavigate(
          const AddCommentsView(), NavigationConstants.ADD_COMMENT);
      case NavigationConstants.LOGIN_REQUIRED:
        return bottomToTopNavigate(
            LoginRequired(message: args.arguments as String),
            NavigationConstants.LOGIN_REQUIRED);
      default:
        return defaultNavigate(
            const BottomBarView(), NavigationConstants.DEFAULT);
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
