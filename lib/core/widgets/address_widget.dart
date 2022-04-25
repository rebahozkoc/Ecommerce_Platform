import 'package:flutter/material.dart';
import 'package:mobile/core/init/theme/color_theme.dart';

class AddressWidget extends StatelessWidget {
  final double latitude;
  final double longitude;
  const AddressWidget({
    Key? key,
    required this.latitude,
    required this.longitude,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
          color: AppColors.white,
          borderRadius: BorderRadius.circular(8),
          border: Border.all(
            color: AppColors.gray,
            width: 0.5,
          )),
      child: _items(),
    );
  }

  Column _items() => Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.max,
        children: [
          _title(),
          const SizedBox(height: 16),
          _name(),
          _address(),
          _phone(),
          _buttons(),
        ],
      );

  Text _title() => const Text(
        "Home Address",
        style: TextStyle(
            color: AppColors.textColorGray,
            fontWeight: FontWeight.w700,
            fontSize: 13.5),
      );

  Text _name() => const Text(
        "Charles Leclerc",
        style: TextStyle(
            color: AppColors.darkGray,
            fontWeight: FontWeight.w700,
            fontSize: 15),
      );

  Padding _address() => const Padding(
        padding: EdgeInsets.symmetric(vertical: 8.0),
        child: Text(
          "Küçük Çamlıca Mahallesi Şehit İsmail Moray Sokak No:3\n"
          "KISIKLI /ÜSKÜDAR/ İSTANBUL\n"
          "Turkey 34696",
          style: TextStyle(
              color: AppColors.black,
              fontWeight: FontWeight.w400,
              fontSize: 15),
        ),
      );

  Text _phone() => const Text("905*****11",
      style: TextStyle(
        color: AppColors.textColorGray,
        fontWeight: FontWeight.w700,
        fontSize: 15,
      ));

  Container _buttons() => Container(
        margin: const EdgeInsets.only(top: 16),
        width: double.infinity,
        height: 48,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          mainAxisSize: MainAxisSize.max,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [deleteButton(), _editButton()],
        ),
      );

  TextButton deleteButton() => TextButton(
        child: const Text(
          "Edit",
          style: TextStyle(
            fontSize: 16,
            color: AppColors.darkGray,
          ),
        ),
        onPressed: () {
          debugPrint("Delete Button Clicked");
        },
      );

  ElevatedButton _editButton() => ElevatedButton(
        child: const Text(
          "Delete",
          style: TextStyle(fontSize: 16),
        ),
        onPressed: () {
          debugPrint("Edit Button Clicked");
        },
      );
}
