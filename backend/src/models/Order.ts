import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Order extends Model {
  declare id: string;
  declare userId: string;
  declare productId: string;
  declare quantity: number;
  declare totalPrice: number;
  declare status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  declare paymentId: string;
  declare deliveryAddress: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'confirmed', 'shipped', 'delivered', 'cancelled'),
      defaultValue: 'pending',
    },
    paymentId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    deliveryAddress: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'orders',
  }
);

export default Order;
