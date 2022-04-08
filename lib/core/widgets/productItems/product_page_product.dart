import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:mobile/core/init/theme/color_theme.dart';

class PageProduct extends StatelessWidget {
  const PageProduct({Key? key}) : super(key: key);

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

        ),
      )
    );


    InkWell _favoriteButton() => InkWell(
      onTap: ((){
        debugPrint("Favorite button clicked");
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


  }
}
