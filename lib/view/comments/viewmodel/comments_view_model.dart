import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobile/core/constants/navigation/navigation_constants.dart';
import 'package:mobile/view/comments/add_comments/view/add_comments_view.dart';
import 'package:mobx/mobx.dart';
import 'package:persistent_bottom_nav_bar/persistent-tab-view.dart';
part 'comments_view_model.g.dart';

class CommentsViewModel = _CommentsViewModelBase with _$CommentsViewModel;

abstract class _CommentsViewModelBase with Store, BaseViewModel {
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {}

  void dispose() {}

  void navigateToAddCommentsView(BuildContext context) =>
      pushNewScreenWithRouteSettings(
        context,
        screen: const AddCommentsView(),
        settings: const RouteSettings(name: NavigationConstants.ADD_COMMENT),
        withNavBar: true,
        pageTransitionAnimation: PageTransitionAnimation.cupertino,
      );
}
