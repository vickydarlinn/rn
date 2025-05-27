import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import styles from './styles';

type ProductCardProps = {
  imageSource: {uri: string};
  title: string;
  price: number;
  onAddToCart?: (quantity: number) => void;
};

const ProductCard = ({
  imageSource,
  title,
  price,
  onAddToCart,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onAddToCart?.(newQuantity);
  };

  const decrement = () => {
    const newQuantity = quantity > 0 ? quantity - 1 : 0;
    setQuantity(newQuantity);
    onAddToCart?.(newQuantity);
  };

  return (
    <Pressable style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View style={styles.priceQuantityRow}>
          <Text style={styles.price}>₹{price.toFixed(2)}</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={decrement}
              style={styles.quantityButton}
              activeOpacity={0.7}>
              <Text style={styles.buttonText}>−</Text>
            </TouchableOpacity>

            <Text style={styles.quantity}>{quantity}</Text>

            <TouchableOpacity
              onPress={increment}
              style={styles.quantityButton}
              activeOpacity={0.7}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;
