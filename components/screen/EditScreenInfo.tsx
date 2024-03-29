import React from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';

import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Red, Green, Blue } from '../TextColor';
import { Text, View } from '../Themed';

import Colors from '@/constants/Colors';
import { List } from '../LiSection';
import { Card, ClickIfYouCan, ClickOnMe } from '../ButtonConsole';
import { MapAffiche } from '../MapLi';
import { ThemeButtons } from '../ButonSwitchColor';
import { ListArticle } from '../ListStatement';


export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <ScrollView>
      <View>
        <ThemeButtons/>
        <View style={styles.getStartedContainer}>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            <Blue>Open up the code for this screen:</Blue>
          </Text>

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            darkColor="rgba(255,255,255,0.05)"
            lightColor="rgba(0,0,0,0.05)">
            <Green><MonoText>{path}</MonoText></Green>
          </View>

          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            <Red>Change any of the text, save the file, and your app will automatically update.</Red>
          </Text>
          <View>
            <List />
          </View>
          <View>
            <ClickOnMe></ClickOnMe>
            <ClickIfYouCan title='Here you can click' buttonTitle='Hi' />
            <ClickIfYouCan title='No Button Here' buttonTitle={undefined} />
            <Card loading={true} error={true} title="Title"></Card>
            <MapAffiche/>
            <ListArticle></ListArticle>
          </View>
        </View>

        <View style={styles.helpContainer}>
          <ExternalLink
            style={styles.helpLink}
            href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            </Text>
          </ExternalLink>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
