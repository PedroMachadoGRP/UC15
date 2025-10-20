import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons'; // <- Ícones do Expo

export default function Post(props: { title: string; texto: string; image: string }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Image style={styles.img} source={{ uri: props.image }} />

      <View style={styles.subContainer}>
        <Text style={styles.postText}>{props.texto}</Text>

        <TouchableOpacity
          onPress={toggleLike}
          style={[styles.baseBtn, liked ? styles.newBtn : styles.btn]}
        >
          <MaterialIcons
            name={liked ? 'favorite' : 'favorite-border'}
            size={28}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  baseBtn: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {
    width: 350,
    height: 200,
    borderRadius: 15,
  },
  text: {
    fontSize: 30,
    marginBottom: 13,
  },
  postText: {
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#007AFF',
  },
  newBtn: {
    backgroundColor: '#FF3B30',
  },
  subContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '100%',
  },
});
