import 'package:flutter/material.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/widgets/productItems/track_product_big.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/orders/viewmodel/orders_view_model.dart';


class OrdersView extends StatefulWidget {
  const OrdersView({Key? key}) : super(key: key);

  @override
  State<OrdersView> createState() => _OrdersViewState();
}

class _OrdersViewState extends State<OrdersView> with TickerProviderStateMixin{
  late OrdersViewModel viewModel;
  late TabController controller;
  int index = 0;

  @override
  void initState() {
    controller = TabController(length: 3, vsync: this);
    controller.addListener(_setActiveTabIndex);
    super.initState();
  }

  void _setActiveTabIndex() {
    setState(() {
      index = controller.index;
    });
  }

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
        title: const Text("Order Tracking"),
      );

  Center _body() =>  Center(
    child: Expanded(
      child: ListView(
        children: [
        Column(
          mainAxisAlignment: MainAxisAlignment.start,

          children: const [
            TrackProductBig(),
            TrackProductBig(),
            TrackProductBig(),
            TrackProductBig(),
            TrackProductBig(),

          ],
        ),

        ],
      )
    ),

  );

}


