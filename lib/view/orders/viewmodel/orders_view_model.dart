import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobile/core/widgets/ToastMessage.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/orders/model/order_model.dart';
import 'package:mobile/view/orders/repository/orders_repository.dart';
import 'package:mobx/mobx.dart';
part 'orders_view_model.g.dart';

class OrdersViewModel = _OrdersViewModelBase with _$OrdersViewModel;

abstract class _OrdersViewModelBase with Store, BaseViewModel {
  late OrderRepository _repository;
  late OrderResponseModel _orderResponseModel;

  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {
    _repository = locator<OrderRepository>();
  }

  @observable
  var orders = ObservableList<OrderModel>();

  @action
  void setOrders(List<OrderModel> orders) {
    this.orders.clear();
    for (var order in orders) {
      addNewOrder(order);
    }
  }

  @action
  void addNewOrder(OrderModel order) {
    orders.add(order);
  }

  Future<bool> getOrders({
    BuildContext? context,
  }) async {
    _orderResponseModel = await _repository.getOrders(
      context: context,
    );
    debugPrint("_orderResponseModel: ${_orderResponseModel.toString()}");
    if (_orderResponseModel.isSuccess ?? false) {
      setOrders(_orderResponseModel.data!);
    } else {
      showToast(
          context: context!,
          message: _orderResponseModel.isSuccess ?? false
              ? "Orders not found"
              : _orderResponseModel.message ?? "Orders not found",
          isSuccess: false);
    }

    return _orderResponseModel.isSuccess ?? false;
  }
}
