// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'search_view_model.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_brace_in_string_interps, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic

mixin _$SearchViewModel on _SearchViewModelBase, Store {
  final _$isFocusedAtom = Atom(name: '_SearchViewModelBase.isFocused');

  @override
  bool get isFocused {
    _$isFocusedAtom.reportRead();
    return super.isFocused;
  }

  @override
  set isFocused(bool value) {
    _$isFocusedAtom.reportWrite(value, super.isFocused, () {
      super.isFocused = value;
    });
  }

  final _$isSearchEmptyAtom = Atom(name: '_SearchViewModelBase.isSearchEmpty');

  @override
  bool get isSearchEmpty {
    _$isSearchEmptyAtom.reportRead();
    return super.isSearchEmpty;
  }

  @override
  set isSearchEmpty(bool value) {
    _$isSearchEmptyAtom.reportWrite(value, super.isSearchEmpty, () {
      super.isSearchEmpty = value;
    });
  }

  final _$searchControllerAtom =
      Atom(name: '_SearchViewModelBase.searchController');

  @override
  TextEditingController get searchController {
    _$searchControllerAtom.reportRead();
    return super.searchController;
  }

  @override
  set searchController(TextEditingController value) {
    _$searchControllerAtom.reportWrite(value, super.searchController, () {
      super.searchController = value;
    });
  }

  final _$onTextChangedAsyncAction =
      AsyncAction('_SearchViewModelBase.onTextChanged');

  @override
  Future<void> onTextChanged() {
    return _$onTextChangedAsyncAction.run(() => super.onTextChanged());
  }

  final _$_SearchViewModelBaseActionController =
      ActionController(name: '_SearchViewModelBase');

  @override
  void _listener() {
    final _$actionInfo = _$_SearchViewModelBaseActionController.startAction(
        name: '_SearchViewModelBase._listener');
    try {
      return super._listener();
    } finally {
      _$_SearchViewModelBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  String toString() {
    return '''
isFocused: ${isFocused},
isSearchEmpty: ${isSearchEmpty},
searchController: ${searchController}
    ''';
  }
}
