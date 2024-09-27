import {IncomingMessage, ServerResponse} from 'http';
import {serviceListEpisodes} from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/filter-podcast-models';

export const getListEpisodes = async (
    req: IncomingMessage,
     res: ServerResponse
    ) => {

    const content: PodcastTransferModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, {'Content-Type': ContentType.JSON});
    res.write(JSON.stringify(content.body));

    res.end();
};

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse    
) => {
    //http://localhost:3333/api/episode?p=flow
    const queryString = req.url?.split('?p=')[1] || "";

    const content: PodcastTransferModel = await serviceFilterEpisodes(queryString);
    
    res.writeHead(content.statusCode, {'Content-Type': ContentType.JSON});
    res.write(JSON.stringify(content.body));
    
    res.end();
};
