import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/address/model/adress_model.dart';
import 'package:mobile/view/address/repository/address_repository.dart';
import 'package:mobx/mobx.dart';
part 'adress_view_model.g.dart';

class AddressViewModel = _AddressViewModelBase with _$AddressViewModel;

abstract class _AddressViewModelBase with Store, BaseViewModel {
  late AddressRepository _repository;
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {
    _repository = locator<AddressRepository>();
  }

  void dispose() {}

  @observable
  late AddressesResponseModel addressesResponseModel;

  Future<bool> getData() async {
    addressesResponseModel = await _repository.getAddresses(
      context: context,
    );
    
    return addressesResponseModel.isSuccess!;
  }
}
