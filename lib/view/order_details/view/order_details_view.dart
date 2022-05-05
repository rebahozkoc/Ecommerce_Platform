import 'package:flutter/material.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
import 'package:mobile/core/widgets/productItems/track_product_big.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/orders/viewmodel/orders_view_model.dart';


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
          _detail(),
          _address(),
          _payment(),
        ],
      ),

    ),
  );

  SizedBox _orderID() => SizedBox(
    width: double.infinity,
    child: Padding(
      padding: const EdgeInsets.all(12.0),
      child: Row(
        children: const [
          Text("Order-ID: 123-456-789",
          style: TextStyle(
            color: AppColors.black,
            fontWeight: FontWeight.w700,
          ),)
        ],
      ),
    ),
  );

  InkWell _detail() => InkWell(
    child: Container(
      height: 80,
      margin: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      //padding: const EdgeInsets.all(12),
      width: double.infinity,
      decoration: BoxDecoration(
        color:  AppColors.white,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.max,
        children: [
          imageClip(),
          Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(width: 20),
              const Padding(
                padding: EdgeInsets.fromLTRB(10, 15, 5, 5),
                child: Text(
                  "Slipover armchair",
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: AppColors.black,
                  ),
                ),
              ),
              Row(
                children: const [
                  Padding(
                    padding: EdgeInsets.fromLTRB(10, 5, 5, 10),
                    child: Text(
                      "Goal Design",
                      style: TextStyle(
                        color: AppColors.darkGray,
                        fontWeight: FontWeight.w200,
                        fontSize: 12,
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
          Row(
            children: const [
              SizedBox(width: 30),
              Text(
                "-₺ 310",
                style: TextStyle(
                  color: AppColors.primary,
                  fontWeight: FontWeight.w800,
                  fontSize: 14,
                ),
              ),
            ],
          ),
        ],
      ),
    ),
  );


  SizedBox _address() => SizedBox(
    width: double.infinity,
    child: Padding(
      padding: const EdgeInsets.all(12.0),
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
              Text("Orta Mahallesi, Üniversite Caddesi\nNo:27 Tuzla, 34956 İstanbul",
                style: TextStyle(
                  color: AppColors.black,
                  fontSize: 14,
                  fontWeight: FontWeight.w400,
                ),
              ),
            ],
          ),
          Row(
            children: const [
              Text(
                "Charles Leclerc - 90505***4567",
                style: TextStyle(
                  color: AppColors.black,
                  fontSize: 12,
                  fontWeight: FontWeight.bold,
                ),
              )
            ],
          ),
          const SizedBox(height: 20),
          Row(
            children: const [
              Text("Billing Address",
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
              Text("Orta Mahallesi, Üniversite Caddesi\nNo:27 Tuzla, 34956 İstanbul",
                style: TextStyle(
                  color: AppColors.black,
                  fontSize: 14,
                  fontWeight: FontWeight.w400,
                ),
              ),
            ],
          ),
          Row(
            children: const [
              Text(
                "Charles Leclerc - 90505***4567",
                style: TextStyle(
                  color: AppColors.black,
                  fontSize: 12,
                  fontWeight: FontWeight.bold,
                ),
              )
            ],
          ),
        ],
      ),
    ),
  );

  Padding _payment() => Padding(
    padding: const EdgeInsets.all(12.0),
    child: Column(
      children: [
        Row(
          children: const[
            Text("Payment Information",
            style: TextStyle(
              color: AppColors.black,
              fontSize: 16,
              fontWeight: FontWeight.bold,
            ),
            ),
          ],
        ),
        const SizedBox(height: 10),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: const[
            Text("Shipment", style: TextStyle(color: AppColors.black, fontSize: 14, fontWeight: FontWeight.w400),),
            Text("Free", style: TextStyle(color: AppColors.black, fontSize: 14, fontWeight: FontWeight.w700),)
          ],
        ),
        const SizedBox(height: 5),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: const [
            Text("Sum", style: TextStyle(color: AppColors.black, fontSize: 14, fontWeight: FontWeight.w400),),
            Text("₺380", style: TextStyle(color: AppColors.black, fontSize: 14, fontWeight: FontWeight.w700),)
          ],
        ),
      ],
    ),
  );


}