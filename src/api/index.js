import VAGAS from "../assets/dicionario/feeds.json"

export const getFeed = async (feedId) => {
    return (VAGAS.feeds.find(feed => feed._id==feedId))
}
