import 'package:flutter/material.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
import 'package:mobile/core/widgets/productItems/track_product_big.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/orders/viewmodel/orders_view_model.dart';
import 'package:mobile/core/widgets/customScrollPhysics.dart';


class OrderDetailsView extends StatefulWidget {
  const OrderDetailsView({Key? key}) : super(key: key);

  @override
  State<OrderDetailsView> createState() => _OrderDetailsViewState();
}

class _OrderDetailsViewState extends State<OrderDetailsView> with TickerProviderStateMixin{
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
      title: const Text("Order Details"),
    );

  Center _body() => Center(
    child: SingleChildScrollView(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          _orderID(),
          _address(),
        ],
      ),

    ),
  );

  Padding _orderID() => const Padding(
    padding: EdgeInsets.all(12.0),
    child: Text("Order ID: 123-456-789"),
  );


  Container _address() => Container(
    height: 200,
    width: double.infinity,
    child: Padding(
      padding: EdgeInsets.all(12.0),
      child: Column(
        children: [
          Row(
            children: const [
              Text("Delivery Address",
              style: TextStyle(
                color: AppColors.black,
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
              ),
            ],
          ),
          Row(
            children: const [
              Text("Delivery Address",
                style: TextStyle(
                  color: AppColors.black,
                  fontSize: 14,
                  fontWeight: FontWeight.w400,
                ),
              ),
            ],
          ),
        ],
      ),
    ),
  );
}