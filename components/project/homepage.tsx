import { FunctionComponent } from 'react';
import { gql } from 'graphql-request';
import type { ProjectType } from 'types';
import useSWRImmutable from 'swr/immutable';
import fetcher from 'lib/github-fetcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const LatestProject:FunctionComponent = () => {
  const query = gql`
      {
        viewer {
          repositories(first: 9, privacy: PUBLIC, orderBy: {field: CREATED_AT, direction: DESC}) {
            totalCount
            nodes {
              name
              description
              homepageUrl
              url
              pushedAt
            }
          }
        }
      }
      `;

  const { data, error } = useSWRImmutable(query, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, key: number) => (
          <div key={`pulse_${key.toString()}`} className="animate-pulse flex space-x-3">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-400 rounded w-3/4" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-400 rounded w-5/6" />
                <div className="h-4 bg-gray-400 rounded w-5/6" />
              </div>
            </div>
            <div className="rounded-full bg-gray-400 h-12 w-12" />

          </div>
        ))}

      </div>
    );
  }
  const project = data?.viewer?.repositories?.nodes || [];
  return (
    <ul className="flex flex-col md:flex-row flex-wrap gap-3">
      {project.map(({
        name, description, url, homepageUrl,
      } : ProjectType, idx: number) => {
        const colsLink = homepageUrl ? 'grid-cols-2' : 'grid-cols-1';
        return (
          <li key={`posts_${idx.toString()}`} className="border-gray-400 flex flex-col md:flex-row mb-2">
            <div className="select-none cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">{name}</div>
                <div className="text-gray-600 text-sm"><a href="asdsd" target="_blank">{description}</a></div>
              </div>
              <div className={`grid ${colsLink} text-gray-600 gap-2 text-xs`}>
                { homepageUrl && (
                  <a href={homepageUrl} target="_blank" rel="nofollow noreferrer">
                    <FontAwesomeIcon icon={faLink} fontSize="1.5rem" className="hover:text-gray-300 dark:hover:text-gray-900" />
                  </a>
                )}
                <a href={url} target="_blank" rel="nofollow noreferrer">
                  <FontAwesomeIcon icon={faGithub} fontSize="1.5rem" className="hover:text-gray-300 dark:hover:text-gray-900" />
                </a>
              </div>

            </div>
          </li>

        );
      })}

    </ul>
  );
};

export default LatestProject;
