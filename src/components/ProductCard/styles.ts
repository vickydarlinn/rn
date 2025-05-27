import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
    overflow: 'hidden', // Important for borderRadius to work with image
  },
  imageContainer: {
    width: '100%',
    height: 200, // Fixed height for image area
    marginBottom: 0,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    padding: 20, // Moved padding here for content area only
  },
  title: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    marginBottom: 12,
    lineHeight: 22,
    minHeight: 44, // Ensures consistent height for 2 lines
  },
  priceQuantityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: '#1a1a1a',
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#333333',
    borderRadius: 25,
    paddingHorizontal: 4,
    paddingVertical: 2,
    minWidth: 100,
    justifyContent: 'space-between',
  },
  quantityButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    color: '#333333',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 20,
  },
  quantity: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '500',
    minWidth: 24,
    textAlign: 'center',
  },
});
