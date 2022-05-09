import 'package:cached_network_image/cached_network_image.dart';
import 'package:expandable/expandable.dart';
import 'package:flutter/material.dart';
import 'package:mobile/core/constants/app/app_constants.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
import 'package:mobile/view/orders/model/order_model.dart';

class TrackProductBig extends StatelessWidget {
  final OrderModel order;
  const TrackProductBig({Key? key, required this.order}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ExpandablePanel(
      header: InkWell(
        child: Container(
          height: 80,
          margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
          //padding: const EdgeInsets.all(12),
          width: double.infinity,
          decoration: BoxDecoration(
            color: AppColors.white,
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
                  Padding(
                    padding:const  EdgeInsets.fromLTRB(10, 15, 5, 5),
                    child: Text(
                      order.product!.title?.substring(0, 17) ?? "Slipover armchair",
                      style: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: AppColors.black,
                      ),
                    ),
                  ),
                  Row(
                    children: [
                      Padding(
                        padding: const EdgeInsets.fromLTRB(10, 5, 5, 10),
                        child: Text(
                          order.product!.distributor ?? "Goal Design",
                          style: const TextStyle(
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
                children: [
                  const SizedBox(width: 30),
                  Text(
                    "${(order.product!.price ?? 0) * (order.quantity ?? 0)}",
                    style: const TextStyle(
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
      ),
      collapsed: const Text(""),
      expanded: _status(),
    );
  }

  ClipRRect imageClip() {
    return ClipRRect(
      borderRadius: BorderRadius.circular(12),
      child: _image(),
    );
  }

  AspectRatio _image() {
    return AspectRatio(
      aspectRatio: 1,
      child: CachedNetworkImage(
        imageUrl: order.product?.photos?.first.photoUrl ??
            ApplicationConstants.PRODUCT_IMG,
        width: 60,
        height: 60,
        fit: BoxFit.fill,
      ),
    );
  }

  InkWell _status() {
    late int status = 2;
    return InkWell(
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
        //padding: const EdgeInsets.all(12),
        width: double.infinity,
        decoration: BoxDecoration(
          color: AppColors.white,
          borderRadius: BorderRadius.circular(12),
        ),
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [
              Row(
                children:  [
                  Text("Order-ID: ${order.product?.id}",
                      style: const TextStyle(
                        color: AppColors.black,
                        fontWeight: FontWeight.w700,
                      ))
                ],
              ),
              const SizedBox(height: 10),
              Row(
                children: [
                  if (status == 0)
                    RichText(
                      text: const TextSpan(
                        children: [
                          WidgetSpan(
                              child: Icon(Icons.call_received,
                                  color: AppColors.primaryLight, size: 24)),
                          TextSpan(
                              text: " Preparing",
                              style: TextStyle(
                                  color: AppColors.primaryLight, fontSize: 24))
                        ],
                      ),
                    ),
                  if (status == 1)
                    RichText(
                      text: const TextSpan(
                        children: [
                          WidgetSpan(
                              child: Icon(Icons.local_shipping,
                                  color: AppColors.azure, size: 24)),
                          TextSpan(
                              text: " Shipped",
                              style: TextStyle(
                                  color: AppColors.azure, fontSize: 24))
                        ],
                      ),
                    ),
                  if (status == 2)
                    RichText(
                      text: const TextSpan(
                        children: [
                          WidgetSpan(
                              child: Icon(Icons.inbox,
                                  color: Colors.green, size: 24)),
                          TextSpan(
                              text: " Delivered",
                              style:
                                  TextStyle(color: Colors.green, fontSize: 24))
                        ],
                      ),
                    ),
                ],
              ),
              const SizedBox(height: 10),
              Row(
                children: const [
                  Text(
                    "Delivery Address",
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
                  Text(
                    "Orta Mahallesi, Üniversite Caddesi\nNo:27 Tuzla, 34956 İstanbul",
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
                  Text(
                    "Payment Information",
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
                children: const [
                  Text(
                    "Shipment",
                    style: TextStyle(
                        color: AppColors.black,
                        fontSize: 14,
                        fontWeight: FontWeight.w400),
                  ),
                  Text(
                    "Free",
                    style: TextStyle(
                        color: AppColors.black,
                        fontSize: 14,
                        fontWeight: FontWeight.w700),
                  )
                ],
              ),
              const SizedBox(height: 5),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: const [
                  Text(
                    "Sum",
                    style: TextStyle(
                        color: AppColors.black,
                        fontSize: 14,
                        fontWeight: FontWeight.w400),
                  ),
                  Text(
                    "₺380",
                    style: TextStyle(
                        color: AppColors.black,
                        fontSize: 14,
                        fontWeight: FontWeight.w700),
                  )
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
