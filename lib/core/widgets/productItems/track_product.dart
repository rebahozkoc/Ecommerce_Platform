import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:mobile/core/init/theme/color_theme.dart';

class TrackProduct extends StatelessWidget {
  const TrackProduct({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: const BorderRadius.all(Radius.circular(8)),
      child: Container(
        width: 120,
        height: 185,
        decoration: const BoxDecoration(
          color: AppColors.white,
        ),
        child: Column(children: [_content(), _infos()]),
      ),
    );
  }

  SizedBox _content() {
    return SizedBox(
      height: 120,
      width: 120,
      child: Stack(children: [
        _image(),
        Container(
          width: 120,
          height: 120,
          padding: const EdgeInsets.all(4),
        )
      ]),
    );
  }

  CachedNetworkImage _image() {
    return CachedNetworkImage(
      imageUrl:
      "http://employee-self-service.de/wp-content/themes/dante/images/default-thumb.png",
      width: 120,
      height: 120,
      fit: BoxFit.fill,
    );
  }

  SizedBox _infos() => SizedBox(
    height: 65,
    width: 120,
    child: Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _title(),
          _producer(),
          _price(),
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
      fontSize: 12,
    ),
  );

  Text _producer() => const Text(
    "Goal Design",
    textAlign: TextAlign.start,
    style: TextStyle(
      color: AppColors.darkGray,
      fontWeight: FontWeight.w500,
      fontSize: 10,
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
