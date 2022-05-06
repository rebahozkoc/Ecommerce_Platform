import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobile/core/constants/navigation/navigation_constants.dart';
import 'package:mobile/view/comments/view/comments_view.dart';
import 'package:mobile/view/shopList/view/shoplist_view.dart';
import 'package:mobx/mobx.dart';
import 'package:persistent_bottom_nav_bar/persistent-tab-view.dart';
part 'product_view_model.g.dart';

class ProductViewModel = _ProductViewModelBase with _$ProductViewModel;

abstract class _ProductViewModelBase with Store, BaseViewModel {
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {}

  void dispose() {}

  void navigateToCommentsView(BuildContext context) =>
      pushNewScreenWithRouteSettings(
        context,
        screen: const CommentsView(),
        settings: const RouteSettings(name: NavigationConstants.COMMENTS),
        withNavBar: true,
        pageTransitionAnimation: PageTransitionAnimation.cupertino,
      );

}
