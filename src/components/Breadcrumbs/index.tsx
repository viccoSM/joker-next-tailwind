import React, {FC} from 'react';
import Link from "next/link";
import {ChevronRight} from "react-feather";

interface BreadcrumbsProps {
  title: string,
  items?: {
    name: string,
    path: string
  }[]
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({title, items}) => (
  <div className='flex items-center space-x-4'>
    <h4>{title}</h4>
    <div className='space-x-3'>
      {items?.map((item, idx) => (
        <>
          {items?.length - 1 !== idx ? (
            <>
              <Link href={item.path}>
                {item.name}
              </Link>
              <ChevronRight/>
            </>
          ) : (
            <p>item.name</p>
          )}
        </>
      ))}
    </div>
  </div>
);

export default Breadcrumbs;