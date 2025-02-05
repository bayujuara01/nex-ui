import { Button, Container, Overlay, Text, Title } from '@nex-ui/core';
import { GithubIcon } from '@nex-uix/dev-icons';
import banner from './banner.webp';
import classes from './Banner.module.css';

export function Banner() {
  return (
    <div className={classes.wrapper}>
      <Container size={1100} px="md">
        <div className={classes.image} style={{ backgroundImage: `url(${banner.src})` }} />
        <Overlay className={classes.overlay} opacity={1} zIndex={1} />

        <div className={classes.body}>
          <Text className={classes.supTitle}>Build even faster with Nex UI UI</Text>
          <Title className={classes.title}>
            <span className={classes.highlight}>120+ responsive components</span>
            <br /> built with Nex UI
          </Title>

          <Text className={classes.description}>
            Build your next website even faster with premade responsive components designed and
            built by Nex UI maintainers and community. All components are free forever for
            everyone.
          </Text>

          {/*<div className={classes.controls}>*/}
          {/*  <Button*/}
          {/*    className={classes.control}*/}
          {/*    variant="gradient"*/}
          {/*    radius="md"*/}
          {/*    size="md"*/}
          {/*    component="a"*/}
          {/*    href="https://ui.mantine.dev/"*/}
          {/*  >*/}
          {/*    Explore components*/}
          {/*  </Button>*/}
            {/*<Button*/}
            {/*  leftSection={<GithubIcon size={18} />}*/}
            {/*  component="a"*/}
            {/*  radius="md"*/}
            {/*  href="https://github.com/mantinedev/ui.mantine.dev"*/}
            {/*  variant="default"*/}
            {/*  size="md"*/}
            {/*>*/}
            {/*  View on GitHub*/}
            {/*</Button>*/}
          {/*</div>*/}
        </div>
      </Container>
    </div>
  );
}
