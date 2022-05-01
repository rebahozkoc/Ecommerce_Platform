// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'change_address_view_model.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_brace_in_string_interps, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic

mixin _$ChangeAddressViewModel on _ChangeAddressViewModelBase, Store {
  final _$nameFocusedAtom =
      Atom(name: '_ChangeAddressViewModelBase.nameFocused');

  @override
  bool get nameFocused {
    _$nameFocusedAtom.reportRead();
    return super.nameFocused;
  }

  @override
  set nameFocused(bool value) {
    _$nameFocusedAtom.reportWrite(value, super.nameFocused, () {
      super.nameFocused = value;
    });
  }

  final _$nameNodeAtom = Atom(name: '_ChangeAddressViewModelBase.nameNode');

  @override
  FocusNode get nameNode {
    _$nameNodeAtom.reportRead();
    return super.nameNode;
  }

  @override
  set nameNode(FocusNode value) {
    _$nameNodeAtom.reportWrite(value, super.nameNode, () {
      super.nameNode = value;
    });
  }

  final _$nameControllerAtom =
      Atom(name: '_ChangeAddressViewModelBase.nameController');

  @override
  TextEditingController get nameController {
    _$nameControllerAtom.reportRead();
    return super.nameController;
  }

  @override
  set nameController(TextEditingController value) {
    _$nameControllerAtom.reportWrite(value, super.nameController, () {
      super.nameController = value;
    });
  }

  final _$_ChangeAddressViewModelBaseActionController =
      ActionController(name: '_ChangeAddressViewModelBase');

  @override
  void _listener() {
    final _$actionInfo = _$_ChangeAddressViewModelBaseActionController
        .startAction(name: '_ChangeAddressViewModelBase._listener');
    try {
      return super._listener();
    } finally {
      _$_ChangeAddressViewModelBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  String toString() {
    return '''
nameFocused: ${nameFocused},
nameNode: ${nameNode},
nameController: ${nameController}
    ''';
  }
}
