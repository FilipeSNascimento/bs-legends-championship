import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface InscricaoAttributes {
  id: number;
  nomeEquipe: string;
  titular1: string;
  titular2: string;
  titular3: string;
  reserva1?: string;
  reserva2?: string;
  instagram: string;
  logoEquipe: string;         
  comprovantePix: string;    
  createdAt?: Date;
  updatedAt?: Date;
}

interface InscricaoCreationAttributes extends Optional<InscricaoAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class Inscricao extends Model<InscricaoAttributes, InscricaoCreationAttributes> implements InscricaoAttributes {
  public id!: number;
  public nomeEquipe!: string;
  public titular1!: string;
  public titular2!: string;
  public titular3!: string;
  public reserva1?: string;
  public reserva2?: string;
  public instagram!: string;
  public logoEquipe!: string;
  public comprovantePix!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Inscricao.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nomeEquipe: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  titular1: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  titular2: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  titular3: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  reserva1: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  reserva2: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  instagram: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  logoEquipe: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  comprovantePix: {
    type: DataTypes.STRING(255),
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'Inscricoes',
});

export default Inscricao;
