import 'package:flutter/material.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/orders/viewmodel/orders_view_model.dart';

class OrdersView extends StatefulWidget {
  const OrdersView({Key? key}) : super(key: key);

  @override
  State<OrdersView> createState() => _OrdersViewState();
}

class _OrdersViewState extends State<OrdersView> {
  late OrdersViewModel viewModel;

  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<OrdersViewModel>(),
      onModelReady: (dynamic model) async {
        model.setContext(context);
        model.init();
        viewModel = model;
      },
      onPageBuilder: (context, value) {
        return Scaffold(
          appBar: _appBar(),
          body: _body(),
        );
      },
    );
  }

  AppBar _appBar() => AppBar(
        title: const Text("Orders"),
      );

  Center _body() => const Center(
    child: Text("Orders"),
  );
}
