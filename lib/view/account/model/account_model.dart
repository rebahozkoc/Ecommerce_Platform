
class User {
  String? email;
  bool? isActive;
  String? fullName;
  int? id;

  User({this.email, this.isActive, this.fullName, this.id});

  User.fromJson(Map<String, dynamic> json) {
    email = json['email'];
    isActive = json['is_active'];
    fullName = json['full_name'];
    id = json['id'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['email'] = email;
    data['is_active'] = isActive;
    data['full_name'] = fullName;
    data['id'] = id;
    return data;
  }
}