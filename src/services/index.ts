interface IYoutubeInfo {
  id?: string;
  format?: string;
  noLivestream?: number;
  noShorts?: number;
  skip?: number;
}

interface ITwitchUptime {
  offlineMsg?: number;
}

export function fetchYoutubeInfo(params: IYoutubeInfo) {
  const baseUrl = "https://decapi.me/youtube/latest_video";
  const FORMAT = `{\"id\":\"{id}\",\"title\":\"{title}\"}`;
  const USER_ID = "UCkDwFvETfXmnIwpX7lV3F1g";
  const query = {
    id: params.id ?? USER_ID,
    no_livestream: `${params.noLivestream ?? 0}`,
    no_shorts: `${params.noShorts ?? 0}`,
    skip: `${params.skip ?? 0}`,
  };
  const searchParams = new URLSearchParams(query);
  const format = params?.format ?? FORMAT;
  const url = `${baseUrl}?format=${format}&${searchParams.toString()}`;

  return fetch(url).then((res) => res.json());
}

export function fetchTwitchUptime(params?: ITwitchUptime) {
  const baseUrl = "https://decapi.me/twitch/uptime/afor_digital";
  const query = new URLSearchParams({
    offline_msg: `${params?.offlineMsg ?? -1}`,
  }).toString();
  const url = new URL(query, baseUrl);

  return fetch(url).then((res) => res.text());
}

export function fetchTwitchTitle() {
  const baseUrl = "https://decapi.me/twitch/title/afor_digital";

  return fetch(baseUrl).then((res) => res.text());
}
