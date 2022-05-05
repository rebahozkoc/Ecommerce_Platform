import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobx/mobx.dart';
part 'add_comments_view_model.g.dart';

class AddCommentsViewModel = _AddCommentsViewModelBase with _$AddCommentsViewModel;

abstract class _AddCommentsViewModelBase with Store, BaseViewModel {
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {}

  void dispose() {}
}