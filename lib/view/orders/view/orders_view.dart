import 'package:flutter/material.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/widgets/productItems/track_product.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/orders/viewmodel/orders_view_model.dart';
import 'package:mobile/core/widgets/customScrollPhysics.dart';


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
    child: SingleChildScrollView(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,

        children: [
          _advertisements(),
          TrackProduct(),
        ],
      ),
    ),
  );

  SizedBox _advertisements() => SizedBox(
    width: double.infinity,
    height: 200,
    child: TabBarView(
      controller: controller,
      children: const [
          TrackProduct(),
          TrackProduct(),
        TrackProduct(),

      ],
    ),
  );
}


