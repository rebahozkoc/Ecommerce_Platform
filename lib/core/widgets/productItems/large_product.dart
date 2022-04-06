import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:mobile/core/init/theme/color_theme.dart';

class LargeProduct extends StatelessWidget {
  const LargeProduct({Key? key}) : super(key: key);

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
      ),
    );
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
              _favoriteButton(),
              const SizedBox(height: 12),
              _shoppingCartButton(),
            ],
          ),
        )
      ]),
    );
  }

  AspectRatio _image() {
    return AspectRatio(
      aspectRatio: 1,
      child: CachedNetworkImage(
        imageUrl:
            "http://employee-self-service.de/wp-content/themes/dante/images/default-thumb.png",
        width: double.infinity,
        fit: BoxFit.fill,
      ),
    );
  }

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
        height: 72,
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _title(),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                mainAxisSize: MainAxisSize.max,
                children: [_producer(), _price()],
              ),
            ],
          ),
        ),
      );

  Text _title() => const Text(
        "Wing Chair",
        textAlign: TextAlign.start,
        style: TextStyle(
          color: AppColors.tertiary,
          fontWeight: FontWeight.bold,
          fontSize: 14,
        ),
      );

  Text _producer() => const Text(
        "Goal Design",
        textAlign: TextAlign.start,
        style: TextStyle(
          color: AppColors.darkGray,
          fontWeight: FontWeight.w500,
          fontSize: 12,
        ),
      );

  Text _price() => const Text(
        "380₺",
        textAlign: TextAlign.start,
        style: TextStyle(
          color: AppColors.primary,
          fontWeight: FontWeight.w500,
          fontSize: 12,
        ),
      );
}
