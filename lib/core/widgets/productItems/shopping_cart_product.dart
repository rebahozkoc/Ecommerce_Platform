import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:mobile/core/constants/app/app_constants.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
import 'package:mobile/view/shopList/model/shoplist_model.dart';

class CartProduct extends StatefulWidget {
  final ShopListItem? shopItem;
  final VoidCallback? onIncrease;
  final VoidCallback? onDecrease;
  const CartProduct({
    Key? key,
    this.shopItem,
    this.onIncrease,
    this.onDecrease,
  }) : super(key: key);
  @override
  State<CartProduct> createState() => _CartProductState();
}

class _CartProductState extends State<CartProduct> {
  late int _counter = widget.shopItem?.quantity ?? 1;

  @override
  Widget build(BuildContext context) {
    // setState(() {
    //   _counter = widget.shopItem?.quantity ?? 1;
    // });
    return InkWell(
      child: Container(
        height: 120,
        margin: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
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
                  padding: const EdgeInsets.fromLTRB(10, 25, 5, 5),
                  child: Text(
                    widget.shopItem!.product!.title!,
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
                        widget.shopItem!.product!.distributor!,
                        style: const TextStyle(
                          color: AppColors.darkGray,
                          fontWeight: FontWeight.w200,
                          fontSize: 12,
                        ),
                      ),
                    ),
                  ],
                ),
                Row(
                  children: [
                    Padding(
                      padding: const EdgeInsets.fromLTRB(10, 5, 5, 5),
                      child: Text(
                        (widget.shopItem!.product!.price! * _counter)
                                .toString() +
                            "₺",
                        style: const TextStyle(
                          color: AppColors.primary,
                          fontWeight: FontWeight.w900,
                          fontSize: 18,
                        ),
                      ),
                    ),
                  ],
                )
              ],
            ),
            Row(
              children: [
                _buttons(),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Container _buttons() {
    return Container(
        width: 50,
        height: 30,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12),
          color: AppColors.primary,
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            RichText(
              text: TextSpan(
                children: <TextSpan>[
                  TextSpan(
                      text: "- ",
                      recognizer: TapGestureRecognizer()
                        ..onTap = () {
                          setState(() {
                            _counter--;
                          });
                          widget.onDecrease;
                        }),
                  TextSpan(
                    text: "$_counter",
                  ),
                  TextSpan(
                      text: " +",
                      recognizer: TapGestureRecognizer()
                        ..onTap = () {
                          setState(() {
                            _counter++;
                          });
                          widget.onIncrease;
                        }),
                ],
              ),
            ),
          ],
        ));
  }

  ClipRRect imageClip() {
    return ClipRRect(
      borderRadius: BorderRadius.circular(12),
      child: _image(),
    );
  }

  AspectRatio _image() {
    bool isImage = widget.shopItem!.product!.photos!.isNotEmpty;
    return AspectRatio(
      aspectRatio: 1,
      child: CachedNetworkImage(
        imageUrl: isImage
            ? widget.shopItem!.product!.photos!.first.photoUrl!
            : ApplicationConstants.PRODUCT_IMG,
        width: double.infinity,
        fit: BoxFit.fill,
      ),
    );
  }
}
