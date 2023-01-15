export interface IFetchedPodcastXML {
  _declaration: Declaration;
  rss: Rss;
}

export interface Declaration {
  _attributes: Attributes;
}

export interface Attributes {
  version: string;
  encoding: string;
}

export interface Rss {
  _attributes: Attributes2;
  _comment: string;
  channel: Channel;
}

export interface Attributes2 {
  'xmlns:dc': string;
  'xmlns:content': string;
  'xmlns:atom': string;
  'xmlns:itunes': string;
  'xmlns:media': string;
  'xmlns:georss': string;
  'xmlns:audioboom': string;
  'xmlns:podcast': string;
  version: string;
  'xml:base': string;
}

export interface Channel {
  title: Title;
  description: Description;
  link: Link;
  'atom:link': AtomLink[];
  pubDate: PubDate;
  language: Language;
  image: Image;
  'itunes:image': ItunesImage;
  'audioboom:banner-image': AudioboomBannerImage;
  'itunes:category': ItunesCategory[];
  'itunes:explicit': ItunesExplicit;
  'itunes:summary': ItunesSummary;
  'itunes:author': ItunesAuthor;
  'itunes:owner': ItunesOwner;
  copyright: Copyright;
  'itunes:new-feed-url': ItunesNewFeedUrl;
  'itunes:type': ItunesType;
  item: Item[];
}

export interface Title {
  _text: string;
}

export interface Description {
  _text: string;
}

export interface Link {
  _text: string;
}

export interface AtomLink {
  _attributes: Attributes3;
}

export interface Attributes3 {
  href: string;
  rel: string;
  type?: string;
}

export interface PubDate {
  _text: string;
}

export interface Language {
  _text: string;
}

export interface Image {
  url: Url;
  title: Title2;
  link: Link2;
}

export interface Url {
  _text: string;
}

export interface Title2 {
  _text: string;
}

export interface Link2 {
  _text: string;
}

export interface ItunesImage {
  _attributes: Attributes4;
}

export interface Attributes4 {
  href: string;
}

export interface AudioboomBannerImage {
  _attributes: Attributes5;
}

export interface Attributes5 {
  href: string;
}

export interface ItunesCategory {
  _attributes: Attributes6;
  'itunes:category'?: ItunesCategory2;
}

export interface Attributes6 {
  text: string;
}

export interface ItunesCategory2 {
  _attributes: Attributes7;
}

export interface Attributes7 {
  text: string;
}

export interface ItunesExplicit {
  _text: string;
}

export interface ItunesSummary {
  _text: string;
}

export interface ItunesAuthor {
  _text: string;
}

export interface ItunesOwner {
  'itunes:name': ItunesName;
  'itunes:email': ItunesEmail;
}

export interface ItunesName {
  _text: string;
}

export interface ItunesEmail {
  _text: string;
}

export interface Copyright {
  _text: string;
}

export interface ItunesNewFeedUrl {
  _text: string;
}

export interface ItunesType {
  _text: string;
}

export interface Item {
  title: Title3;
  link: Link3;
  'itunes:episode': ItunesEpisode;
  'itunes:title': ItunesTitle;
  enclosure: Enclosure;
  'media:content': MediaContent[];
  'itunes:image': ItunesImage2;
  'itunes:duration': ItunesDuration;
  'itunes:explicit': ItunesExplicit2;
  'itunes:episodeType': ItunesEpisodeType;
  description: Description2;
  pubDate: PubDate2;
  guid: Guid;
  'itunes:author': ItunesAuthor2;
  'dc:creator': DcCreator;
  'media:rights': MediaRights;
}

export interface Title3 {
  _text: string;
}

export interface Link3 {
  _text: string;
}

export interface ItunesEpisode {
  _text: string;
}

export interface ItunesTitle {
  _text: string;
}

export interface Enclosure {
  _attributes: Attributes8;
}

export interface Attributes8 {
  url: string;
  length: string;
  type: string;
}

export interface MediaContent {
  _attributes: Attributes9;
}

export interface Attributes9 {
  url: string;
  type: string;
  medium: string;
  duration?: string;
  lang?: string;
}

export interface ItunesImage2 {
  _attributes: Attributes10;
}

export interface Attributes10 {
  href: string;
}

export interface ItunesDuration {
  _text: string;
}

export interface ItunesExplicit2 {
  _text: string;
}

export interface ItunesEpisodeType {
  _text: string;
}

export interface Description2 {
  _cdata: string;
}

export interface PubDate2 {
  _text: string;
}

export interface Guid {
  _attributes: Attributes11;
  _text: string;
}

export interface Attributes11 {
  isPermaLink: string;
}

export interface ItunesAuthor2 {
  _text: string;
}

export interface DcCreator {
  _text: string;
}

export interface MediaRights {
  _attributes: Attributes12;
}

export interface Attributes12 {
  status: string;
}
