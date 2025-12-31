import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import User from './User';

export class Product extends Model {
  declare id: string;
  declare name: string;
  declare description: string;
  declare price: number;
  declare category: string;
  declare image: string;
  declare sellerId: string;
  declare inStock: boolean;
  declare quantity: number;
  declare rating: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sellerId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    inStock: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2),
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: 'products',
  }
);

Product.belongsTo(User, { foreignKey: 'sellerId' });

export default Product;
