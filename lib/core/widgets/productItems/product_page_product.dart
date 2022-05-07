import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:mobile/core/constants/app/app_constants.dart';
import 'package:mobile/core/constants/navigation/navigation_constants.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
//import 'package:mobile/core/widgets/customScrollPhysics.dart';
import 'package:mobile/core/init/navigation/navigation_service.dart';
import 'package:mobile/view/product/model/product_model.dart';

class PageProduct extends StatelessWidget {
  final ProductModel? product;
  const PageProduct({Key? key, required this.product}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
        borderRadius: const BorderRadius.all(Radius.circular(8)),
        child: Container(
          decoration: const BoxDecoration(
            color: AppColors.white,
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [_content(), _infos(), Container()],
          ),
        ));
  }

  SizedBox _content() {
    return SizedBox(
      child: Stack(children: [
        _image(),
        Container(
          alignment: Alignment.topRight,
          padding: const EdgeInsets.all(6),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              const SizedBox(height: 24),
              _favoriteButton(),
              const SizedBox(height: 24),
              _shoppingCartButton(),
              const SizedBox(height: 230),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  _decrementButton(),
                  const SizedBox(width: 8),
                  _cartCounter(),
                  const SizedBox(width: 8),
                  _incrementButton(),
                ],
              ),
            ],
          ),
        )
      ]),
    );
  }

  AspectRatio _image() {
    bool isExist = product?.photos?.isNotEmpty ?? false;
    return AspectRatio(
      aspectRatio: 1,
      child: CachedNetworkImage(
        imageUrl: isExist
            ? product!.photos!.first.photoUrl!
            : ApplicationConstants.PRODUCT_IMG,
        width: double.infinity,
        fit: BoxFit.fill,
      ),
    );
  }

  ClipRRect _smallImage() => ClipRRect(
        borderRadius: const BorderRadius.all(Radius.circular(8)),
        child: CachedNetworkImage(
          imageUrl:
              "http://employee-self-service.de/wp-content/themes/dante/images/default-thumb.png",
          width: 100,
          height: 100,
          fit: BoxFit.fill,
        ),
      );

  InkWell _favoriteButton() => InkWell(
        onTap: (() {
          debugPrint("Favorite Button Clicked...");
        }),
        child: Container(
          height: 28,
          width: 28,
          decoration: const BoxDecoration(
            borderRadius: BorderRadius.all(Radius.circular(14)),
            color: AppColors.white,
          ),
          child: const Icon(
            Icons.star_border_rounded,
            size: 16,
          ),
        ),
      );

  InkWell _shoppingCartButton() => InkWell(
        onTap: (() {
          debugPrint("Shopping Cart Button Clicked...");
        }),
        child: Container(
          height: 28,
          width: 28,
          decoration: const BoxDecoration(
            borderRadius: BorderRadius.all(Radius.circular(13)),
            color: AppColors.primary,
          ),
          child: const Icon(
            Icons.add_shopping_cart_outlined,
            color: AppColors.white,
            size: 12,
          ),
        ),
      );

  SizedBox _infos() => SizedBox(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                mainAxisSize: MainAxisSize.max,
                children: [_title(), _price()],
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                mainAxisSize: MainAxisSize.max,
                children: [_itemNo(), _rating()],
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                mainAxisSize: MainAxisSize.max,
                children: [_producer(), _stock()],
              ),
              _descriptionTitle(),
              _description(),
              const SizedBox(
                height: 10,
              ),
              const Text(
                "Similar Item",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: AppColors.tertiary,
                  fontSize: 18,
                ),
              ),
              _similar(),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                mainAxisSize: MainAxisSize.max,
                children: [_commentTitle(), _commentButton()],
              ),
              _comments(),
            ],
          ),
        ),
      );

  Text _title() {
    bool isExist = product?.title?.isNotEmpty ?? false;
    return Text(
      isExist ? product!.title! : "Wing Chair",
      textAlign: TextAlign.start,
      style: const TextStyle(
        color: AppColors.tertiary,
        fontWeight: FontWeight.bold,
        fontSize: 18,
      ),
    );
  }

  Text _itemNo() {
    return Text(
      "300",
      textAlign: TextAlign.start,
      style: TextStyle(
        color: AppColors.tertiary,
        fontWeight: FontWeight.bold,
        fontSize: 14,
      ),
    );
  }

  Text _producer() {
    bool isExist = product?.distributor?.isNotEmpty ?? false;
    return Text(
      isExist ? product!.distributor! : "Goal Design",
      textAlign: TextAlign.start,
      style: TextStyle(
        color: AppColors.darkGray,
        fontWeight: FontWeight.w200,
        fontSize: 12,
      ),
    );
  }

  Text _price() {
    return Text(
      "380₺",
      textAlign: TextAlign.start,
      style: TextStyle(
        color: AppColors.primary,
        fontWeight: FontWeight.w900,
        fontSize: 22,
      ),
    );
  }

  RichText _rating() => RichText(
        text: const TextSpan(children: [
          WidgetSpan(child: Icon(Icons.star, size: 16)),
          TextSpan(
            text: "3,4",
            style: TextStyle(
              color: AppColors.black,
              fontSize: 16,
              fontWeight: FontWeight.bold,
            ),
          ),
        ]),
      );

  InkWell _decrementButton() {
    return InkWell(
      onTap: () {
        debugPrint("Decrement button clicked...");
      },
      child: Container(
        height: 32,
        width: 32,
        decoration: const BoxDecoration(
          borderRadius: BorderRadius.all(Radius.circular(4)),
          color: AppColors.secondary,
        ),
        child: const Icon(
          Icons.remove,
          size: 16,
        ),
      ),
    );
  }

  InkWell _incrementButton() {
    return InkWell(
      onTap: () {
        debugPrint("Increment button clicked...");
      },
      child: Container(
        height: 32,
        width: 32,
        decoration: const BoxDecoration(
          borderRadius: BorderRadius.all(Radius.circular(4)),
          color: AppColors.primary,
        ),
        child: const Icon(
          Icons.add,
          size: 16,
        ),
      ),
    );
  }

  Text _cartCounter() => const Text(
        "1",
        style: TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.bold,
          color: AppColors.white,
        ),
      );

  Row _descriptionTitle() => Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: const [
          SizedBox(
            height: 50,
          ),
          Text(
            "Description",
            style: TextStyle(
              fontWeight: FontWeight.bold,
              color: AppColors.tertiary,
              fontSize: 18,
            ),
          ),
        ],
      );

  Row _description() => Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: const [
          SizedBox(
            height: 10,
          ),
          Flexible(
              child: Text(
            "People have been using natural objects, such as tree stumps, rocks and moss, as furniture since the beginning of human civilisation. Archaeological research.",
            style: TextStyle(
              color: AppColors.darkGray,
              fontWeight: FontWeight.w200,
              fontSize: 14,
            ),
          ))
        ],
      );

  Text _commentTitle() => const Text("Best comments",
      style: TextStyle(
        fontWeight: FontWeight.bold,
        color: AppColors.tertiary,
        fontSize: 18,
      ));

  RichText _stock() => RichText(
        text: const TextSpan(children: [
          TextSpan(
            text: "44 ",
            style: TextStyle(
              fontWeight: FontWeight.bold,
              color: AppColors.primary,
              fontSize: 14,
            ),
          ),
          TextSpan(
            text: "left in stock",
            style: TextStyle(
              fontWeight: FontWeight.w700,
              color: AppColors.tertiary,
              fontSize: 14,
            ),
          )
        ]),
      );

  TextButton _commentButton() => TextButton(
      onPressed: () {
        NavigationService.instance
            .navigateToPage(path: NavigationConstants.COMMENTS);
      },
      child: const Text(
        "Show all",
        style: TextStyle(
          color: AppColors.primary,
          fontWeight: FontWeight.bold,
          fontSize: 18,
        ),
      ));

  // SizedBox _similarItem() {
  //   return SizedBox(
  //     width: 1000,
  //     height: 100,
  //     child: ListView.builder(
  //       primary: true,
  //       scrollDirection: Axis.horizontal,
  //       physics: const CustomScrollPhysics(itemDimension: 120),
  //       itemCount: 5,
  //       itemBuilder: (context, index) => _similar(),
  //     ),
  //   );
  // }

  Padding _similar() => Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16),
        child: SizedBox(
          width: 100,
          child: Stack(children: [
            _smallImage(),
          ]),
        ),
      );

  Container _comments() => Container(
        padding: const EdgeInsets.all(8.0),
        width: double.infinity,
        decoration: const BoxDecoration(
            color: AppColors.lightGray,
            borderRadius: BorderRadius.all(Radius.circular(6.0))),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text(
                  "A**** B**** (22) - İstanbul",
                  style: TextStyle(
                    color: AppColors.black,
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                  ),
                ),
                RichText(
                  text: const TextSpan(children: [
                    WidgetSpan(child: Icon(Icons.star, size: 16)),
                    TextSpan(
                      text: "5.0",
                      style: TextStyle(
                        color: AppColors.black,
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ]),
                ),
              ],
            ),
            Row(
              children: const [
                Flexible(
                    child: Text(
                  "This chair seems pretty sturdy. It’s also very soft, and the cushion is nice and thick. It took maybe 5 minutes to put together, and has no problem holding everyone in the family",
                  style: TextStyle(
                    color: AppColors.black,
                    fontWeight: FontWeight.w400,
                    fontSize: 14,
                  ),
                ))
              ],
            )
          ],
        ),
      );
}
