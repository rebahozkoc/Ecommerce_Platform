import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobx/mobx.dart';
part 'comments_view_model.g.dart';

class CommentsViewModel = _CommentsViewModelBase with _$CommentsViewModel;

abstract class _CommentsViewModelBase with Store, BaseViewModel {
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {}

  void dispose() {}
}
