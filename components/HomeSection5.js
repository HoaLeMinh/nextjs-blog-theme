// import { MasonryGrid } from '@egjs/react-grid'
// import Image from 'next/image'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image'

const HomeSection5 = ({ title, imagesSrc }) => {
  return (
    <div className="w-full space-y-2 pt-6 pb-4 md:space-y-5 bg-neutral-200 dark:bg-neutral-500">
      <h1 className="text-3xl lg:text-5xl font-bold text-center">{title}</h1>
      <div className={'p-8 md:space-y-8'}>
        <div className={''}>
          {/* <MasonryGrid
            key="network"
            className="container"
            gap={16}
            defaultDirection={'end'}
            align={'center'}
            column={0}
            columnSize={0}
            columnSizeRatio={0}
            onRenderComplete={(e) => {
              // console.log(e);
            }}
          >
            {imagesSrc.map((value, index) => {
              return (
                <>
                  <img
                    key={`item-${index}`}
                    src={value.src}
                    alt={'network item'}
                    style={{
                      maxWidth: 100,
                      maxHeight: 100,
                      objectFit: 'contain',
                      display: 'inline',
                    }}
                  />
                </>
              )
            })}
          </MasonryGrid> */}
{/*           <ImageList variant="quilted" cols={5} rowHeight={80}>
            {imagesSrc.map((item, index) => (
              <ImageListItem key={index} className="justify-center">
                <Image
                  src={item}
                  alt={'network'}
                  width={120}
                  height={64}
                  objectFit={'contain'}
                />
              </ImageListItem>
            ))}
          </ImageList> */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {imagesSrc.map((item, index) => {
              return (
                <Image
                  key={index}
                  src={item}
                  alt={'network'}
                  width={120}
                  height={64}
                  objectFit={'contain'}
                />
              );})}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection5
