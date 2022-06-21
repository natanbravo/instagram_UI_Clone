import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function List(props) {
  function IconLoad(Likeada) {
    return Likeada ? require('../img/likeada.png') : require('../img/like.png');
  }

  function showLikes(Likers){
    if(Likers === 0){
        return;
    }
    return(
        <Text style={styles.likes} >{Likers} {Likers > 1 ? 'curtidas' : 'curtida'}</Text>
    );
  }

  return (
    <View style={styles.list}>
      <View style={styles.profileView}>
        <Image
          style={styles.profileImage}
          source={{uri: props.data.imgperfil}}
        />
        <Text style={styles.userName}>{props.data.nome}</Text>
      </View>
      <Image
        source={{uri: props.data.imgPublicacao}}
        style={styles.imagePost}
        resizeMode="cover"
      />

      <View style={styles.btnArea}>
        <TouchableOpacity>
          <Image
            style={styles.actionIcon}
            source={IconLoad(props.data.likeada)}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            style={styles.actionIcon}
            source={require('../img/comment.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            style={styles.actionIcon}
            source={require('../img/send.png')}
          />
        </TouchableOpacity>

      </View>

      {showLikes(props.data.likers)}

        <Text style={styles.footerName} >
            {props.data.nome}
        </Text>

        <Text style={styles.footerDescription} >
            {props.data.descricao}
        </Text>
       
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginBottom:10
  },
  profileView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  userName: {
    paddingLeft: 5,
    fontSize: 18,
    color: '#121212',
  },
  imagePost: {
    height: 400,
  },
  btnArea: {
    flexDirection: 'row',
    padding: 5,
  },
  actionIcon: {
    width: 25,
    height: 25
  },
  btnSend: {
    paddingLeft: 5
  },
  likes:{
    fontWeight:'bold',
    marginLeft: 5,
    fontSize: 16
  },
  footerName:{
    fontWeight:'700',
    fontSize: 16,
    paddingLeft: 5
  },
  footerDescription:{
    fontWeight:'400',
    paddingLeft: 5,
    paddingBottom: 60,
    fontSize: 15,
  },
});
