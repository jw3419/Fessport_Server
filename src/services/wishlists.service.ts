import HttpException from '../exceptions/HttpException';
//import { Wishlist } from '../interfaces/wishlists.interface';
//import wishlistModel from '../models/wishlists.model';
import { User } from '../interfaces/users.interface';
import userModel from '../models/users.model';

class WishlistService {
  //public wishlists = wishlistModel;
  public users = userModel;

  public async findAllWishlist(userId: string) {
    // const findWishlist = await this.users
    //   .findOne({ _id: userId })
    //   .populate('wishlists')
    //   .exec((err, data) => {
    //     if (err) throw new HttpException(409, `에러다 임마`);
    //     else return data;
    //   });
    // return findWishlist;
    const findWishlist: User = await this.users.findOne({ _id: userId }).populate('wishlists');
    if (!findWishlist) throw new HttpException(409, `에러다 임마`);
    return findWishlist;
  }
}

export default WishlistService;
