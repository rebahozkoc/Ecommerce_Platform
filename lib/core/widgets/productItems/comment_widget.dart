import 'package:flutter/material.dart';
import 'package:mobile/core/init/theme/color_theme.dart';

class CommentWidget extends StatelessWidget {
  const CommentWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(top: 12.0),
      padding: const EdgeInsets.all(8.0),
      width: double.infinity,
      decoration: const BoxDecoration(
          color: AppColors.white,
          borderRadius: BorderRadius.all(Radius.circular(6.0))
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text("A**** B**** (22) - İstanbul",
                style: TextStyle(
                  color: AppColors.black,
                  fontWeight: FontWeight.bold,
                  fontSize: 16,
                ),
              ),
              RichText(
                text: const TextSpan(
                    children: [
                      WidgetSpan(child: Icon(Icons.star, size: 16, color: AppColors.primary)),
                      TextSpan(
                        text: "5.0",
                        style: TextStyle(
                          color: AppColors.black,
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ]
                ),
              ),
            ],
          ),
          Row(
            children: const [
              Text(
                "17 August 2020, Monday",
                style: TextStyle(
                  color: AppColors.gray,
                  fontSize: 12,
                  fontWeight: FontWeight.w500,
                ),
              )
            ],
          ),
          Container(
            margin: EdgeInsets.only(top: 10),
            padding: EdgeInsets.all(8.0),
            decoration: const BoxDecoration(
                color: AppColors.lightGray,
                borderRadius: BorderRadius.all(Radius.circular(6.0))
            ),
            child: Row(
              children: [
                Flexible(
                    child: Text(
                      "This chair seems pretty sturdy. It’s also very soft, and the cushion is nice and thick. It took maybe 5 minutes to put together, and has no problem holding everyone in the family",
                    style: TextStyle(
                      color: AppColors.black,
                      fontWeight: FontWeight.w400,
                      fontSize: 14,
                    ),
                    ),

                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
