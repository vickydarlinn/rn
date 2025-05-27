import React, {useState} from 'react';
import {
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProductCard from '../../components/ProductCard';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const imageURIs = [
  'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=300&q=60',
  'https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=300&q=60',
  'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=300&q=60',
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=300&q=60',
  'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=300&q=60',
];

const productData = [
  {
    id: '1',
    imageSource: {uri: imageURIs[0]},
    title: 'Organic Chicken and Rice Dog Food - Adult',
    price: 2250,
  },
  {
    id: '2',
    imageSource: {uri: imageURIs[1]},
    title: 'Grain-Free Salmon and Sweet Potato Dog Food - Puppy',
    price: 2610,
  },
  {
    id: '3',
    imageSource: {uri: imageURIs[2]},
    title: 'Premium Lamb and Rice Adult Dog Food',
    price: 2890,
  },
  {
    id: '4',
    imageSource: {uri: imageURIs[3]},
    title: 'Natural Cat Food with Tuna',
    price: 1950,
  },
  {
    id: '5',
    imageSource: {uri: imageURIs[4]},
    title: 'Rabbit Pellets Premium Quality',
    price: 850,
  },
];

// Add 30 more products using repeated image sources
for (let i = 6; i <= 35; i++) {
  productData.push({
    id: `${i}`,
    imageSource: {uri: imageURIs[(i - 1) % 5]}, // Cycle through the first 5 images
    title: `Dog Product #${i}`, // You can customize this title further
    price: Math.floor(Math.random() * 2000) + 500, // Random price between 500 and 2500
  });
}

const Store = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productData);

  // Handle search functionality
  const handleSearch = (text: string) => {
    setSearchQuery(text);

    if (text.trim() === '') {
      setFilteredProducts(productData);
    } else {
      const filtered = productData.filter(product =>
        product.title.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredProducts(filtered);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setFilteredProducts(productData);
  };

  const handleAddToCart = (productId: string, quantity: number) => {
    console.log(`Product ${productId}: ${quantity} items added to cart`);
  };
  const insert = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, {paddingBottom: insert.bottom}]}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Icon
            name="search"
            size={20}
            color="#666"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
              <Icon name="close" size={20} color="#666" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Product List */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            imageSource={product.imageSource}
            title={product.title}
            price={product.price}
            onAddToCart={quantity => handleAddToCart(product.id, quantity)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 20,
    gap: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 16,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    color: '#333',
    fontSize: 16,
    height: '100%',
  },
  clearButton: {
    padding: 4,
  },
  searchButton: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 10,
  },
});

export default Store;
