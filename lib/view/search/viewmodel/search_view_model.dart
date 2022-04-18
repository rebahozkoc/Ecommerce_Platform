import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobx/mobx.dart';
part 'search_view_model.g.dart';

class SearchViewModel = _SearchViewModelBase with _$SearchViewModel;

abstract class _SearchViewModelBase with Store, BaseViewModel {
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {
    searchNode.addListener(_listener);
  }

  void dispose() {
    searchNode.removeListener(_listener);
  }

  @observable
  bool isFocused = false;

  @observable
  bool isSearchEmpty = true;

  FocusNode searchNode = FocusNode();

  @observable
  TextEditingController searchController = TextEditingController();

  @action
  void _listener() {
    isFocused = searchNode.hasFocus;
  }

  @action
  Future<void> onTextChanged() async {
      isSearchEmpty = searchController.text.length < 3;
  }
}
